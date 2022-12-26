import React from "react";
import Star from "../Star";

type Props = {
    showModel: boolean;
    setShowReviewModel: (a: boolean) => {};
};

const ReviewModel = (props: Props) => {
    if (!props.showModel) return <></>;
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
                    />
                    <button
                        className="py-2 px-3 text-lg font-extralight text-white-50 bg-green-50 rounded-lg"
                        onClick={() => props.setShowReviewModel(false)}
                    >
                        Submit{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewModel;
