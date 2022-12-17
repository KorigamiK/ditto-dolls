/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
    img: string;
    title: string;
};

const Card = (props: Props) => {
    return (
        <div className="w-full bg-white-200 rounded-3xl p-5 flex flex-col gap-5">
            <div className="bg-grey-50 rounded-xl p-5 flex items-center justify-center h-[300px]">
                <img
                    src={props.img}
                    alt="product"
                    className="h-full object-contain"
                />
            </div>
            <div className="text-center text-xl">{props.title}</div>
            <button className="py-3 text-xl text-white-100 w-full bg-green-50 rounded-md">
                Customize Now
            </button>
        </div>
    );
};

export default Card;
