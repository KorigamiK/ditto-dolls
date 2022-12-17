/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Banner = (props: Props) => {
    return (
        <>
            <section className="w-full bg-green-100">
                <div className="w-4/5 flex justify-between items-center h-[900px] mx-auto">
                    <div className="flex flex-col gap-10">
                        <h6 className="text-6xl text-white-100 font-extralight leading-snug">
                            Get a 3D Figurine <br />
                            to <b>Preserve</b> your <br />
                            Precious <b>Moment</b>
                        </h6>
                        <button className="py-4 px-6 text-2xl font-extralight text-white-50 bg-green-50 flex justify-center items-center gap-5">
                            CUSTOMIZE NOW
                            <img
                                src="/images/icons/bi_arrow-right.png"
                                alt="right-arrow"
                            />
                        </button>
                    </div>
                    <img
                        src="/images/dittols-dolls-banner-img.png"
                        alt="banner-image"
                        className="h-5/6"
                    />
                </div>
            </section>
            <div className="w-full py-8 flex justify-center items-center gap-16 text-white-100 bg-green-50 text-xl">
                <div>√ 99% Accuracy</div>
                <div>√ 2 weeks delivery</div>
                <div>√ Multiple revisions in 3d file</div>
                <div>√ made from Photo</div>
            </div>
        </>
    );
};

export default Banner;
