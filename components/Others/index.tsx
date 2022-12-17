/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Others = (props: Props) => {
    return (
        <section className="py-16 bg-white-100">
            <h2 className="text-green-200 text-4xl text-center">
                Others <span className="text-green-50">VS</span> DittoDolls
            </h2>
            <div className="w-4/5 mx-auto flex justify-between gap-10 mt-24">
                <div className="w-1/2">
                    <h3 className="text-green-200 text-3xl">
                        Not A Blurry Face
                    </h3>
                    <h4 className="text-green-200 text-xl font-medium mt-3">
                        High resolution coloring job
                    </h4>
                    <p className="mt-3 font-light text-lg">
                        The color resolution of other brands is very low that’s
                        why it’s looks blur and detailing of facial features
                        can’t be seen, eyes are the most important part of a
                        person so it shouldn’t look like garbage but on the
                        other hand DittoDolls deliver high resolution facial
                        features with attractive eyes.
                    </p>
                    <button className="py-4 px-6 text-2xl font-extralight text-white-50 bg-green-50 flex justify-center items-center gap-5 mt-16 rounded-md">
                        CUSTOMIZE NOW
                        <img
                            src="/images/icons/bi_arrow-right.png"
                            alt="right-arrow"
                        />
                    </button>
                </div>
                <div className="w-1/2 flex gap-5">
                    <div className="flex flex-col">
                        <div className="w-full bg-green-200 py-2 text-xl text-white-100 text-center mb-5">
                            Others
                        </div>
                        <img src="/images/comparison/c1.png" alt="model" />
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full bg-green-50 py-2 text-xl text-white-100 text-center mb-5">
                            DITTO DOLLS
                        </div>
                        <img src="/images/comparison/c2.png" alt="model" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Others;
