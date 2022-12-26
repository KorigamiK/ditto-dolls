/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
    count: number;
};

const Star = ({ count }: Props) => {
    const filled = Array(count)
        .fill(0)
        .map((i, idx) => (
            <div
                className="grid relative h-8 aspect-square bg-green-300"
                key={idx}
            >
                <img
                    src="/images/icons/star.png"
                    alt="star"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        ));

    const notFilled = Array(5 - count)
        .fill(0)
        .map((i, idx) => (
            <div
                className="grid relative h-8 aspect-square bg-gray-100"
                key={idx}
            >
                <img
                    src="/images/icons/star.png"
                    alt="star"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        ));
    return (
        <div className="flex gap-1">
            {filled}
            {notFilled}
        </div>
    );
};

export default Star;
