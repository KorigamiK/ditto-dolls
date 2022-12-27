import { SetStateAction, Dispatch, useState, FormEvent } from "react";
import Star from "../Star";
import { User } from "firebase/auth";
import { userCollection, reviewsCollection } from "~/utils/firebaseClient";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";

type Props = {
    showModel: boolean;
    setShowReviewModel: Dispatch<SetStateAction<boolean>>;
    user?: User | null;
};

const ReviewModel = (props: Props) => {
    const [stars, setStars] = useState(3);
    const [review, setReview] = useState("");
    const [productType, setProductType] = useState("miniature");

    if (!props.showModel) return <></>;

    const addReviewHandler = async () => {

        if (!props.user) return;
        await setDoc(doc(reviewsCollection), {
            body: review,
            likes: 2,
            productType,
            stars: stars,
            author: doc(userCollection, props.user.uid)

        });
    };

    return (
        <div
            className="fixed bg-black/20 h-screen w-full grid place-items-center top-0 left-0 z-30"
            onClick={() => props.setShowReviewModel(false)}
        >
            <div
                className="bg-white-100 p-5 min-w-[700px] flex flex-col gap-5 rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-white-50 p-5 border-[2px] rounded-lg border-black/10 flex flex-col gap-3">
                    <h2 className="text-[#143A56] text-xl font-medium">
                        Rate your experience
                    </h2>
                    <Star count={3} />
                </div>
                <div className="bg-white-50 p-5 border-[2px] rounded-lg border-black/10 flex flex-col gap-3">
                    <h2 className="text-[#143A56] text-xl font-medium">
                        Tell us more about your experience
                    </h2>
                    <h3 className="text-md">Give us a review</h3>
                    <textarea
                        className="border-[2px] rounded-lg border-black/10 p-3"
                        rows={6}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>

                <div className="bg-white-50 p-5 border-[2px] rounded-lg border-black/10 flex flex-col gap-3">
                    <h2 className="text-[#143A56] text-xl font-medium">
                        What did you buy?
                    </h2>
                    <h3 className="text-md">Product Type</h3>
                    <input type="text" onChange={(e) => setProductType(e.target.value)} placeholder="miniature" className="border-[2px] ml-2 px-2 py-1 rounded-lg border-black/10" name="productType" id="productType" />
                </div>

                {
                    props.user ?
                        <button
                            className="py-2 px-3 text-lg font-extralight text-white-50 bg-green-50 rounded-lg"
                            type='submit'
                            onClick={() => {
                                addReviewHandler();
                                props.setShowReviewModel(false);
                            }}
                        >
                            Submit{" "}
                        </button>
                        : <h3 className="text-md"> <Link href='/signup'>Login</Link> to submit a review</h3>
                }
            </div>
        </div>
    );
};

export default ReviewModel;
