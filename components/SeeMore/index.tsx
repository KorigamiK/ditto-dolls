/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const SeeMore = (props: Props) => {
    return (
        <div className="text-xl w-full py-5">
            <button className="hover:bg-black/5 flex items-center gap-8 mx-auto w-fit py-3 px-5 rounded-full transition-all">
                See More <img src="/images/icons/seemore.svg" alt="see more" />
            </button>
        </div>
    );
};

export default SeeMore;
