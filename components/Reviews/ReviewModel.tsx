import React, { SetStateAction, Dispatch, useState } from "react";
import Star from "../Star";
import { User } from "firebase/auth";
import { db } from "~/utils/firebaseClient";
import { collection, doc, setDoc } from "firebase/firestore";

type Props = {
    showModel: boolean;
    setShowReviewModel: Dispatch<SetStateAction<boolean>>;
    user: User;
};

const ReviewModel = (props: Props) => {
    const [stars, setStars] = useState(3);
    const [review, setReview] = useState("");

    if (!props.showModel) return <></>;

    const addReviewHandler = async () => {
        await setDoc(doc(collection(db, "reviews")), {
            body: review,
            likes: 2,
            productType: "miniature",
            stars: stars,
            author: `/users/${ props.user.uid }`,
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
                    <button
                        className="py-2 px-3 text-lg font-extralight text-white-50 bg-green-50 rounded-lg"
                        onClick={() => {
                            addReviewHandler();
                            props.setShowReviewModel(false);
                        }}
                    >
                        Submit{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewModel;
