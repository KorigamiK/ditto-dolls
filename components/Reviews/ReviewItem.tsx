/* eslint-disable @next/next/no-img-element */
import React from "react";
import Star from "../Star";

type Props = {
    name: string;
    reviewCount: number;
    ratingCount: number;
    reviewDes: string;
};

const ReviewItem = (props: Props) => {
    return (
        <div className="flex flex-col gap-6 p-5 bg-white-50">
            <div className="flex items-center gap-3">
                <div className="h-10 aspect-square rounded-full bg-green-50" />
                <div className="flex flex-col">
                    <h3>{props.name}</h3>
                    <h4>{props.reviewCount} reviews</h4>
                </div>
            </div>
            <div className="h-[2px] bg-black/10 w-full"></div>
            <Star count={props.ratingCount} />
            <p className="text-lg text-green-300 font-medium">
                {props.reviewDes}
            </p>
            <div className="h-[2px] bg-black/10 w-full"></div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <div className="h-10 aspect-square bg-black/10"></div>
                    <h3>Single miniature</h3>
                </div>
                <div className="flex gap-3">
                    <img src="/images/icons/like.png" alt="like" />
                    <img src="/images/icons/dislike.png" alt="dislike" />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
