/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Detailing = (props: Props) => {
    return (
        <section className="py-16 bg-white-50">
            <div className="w-4/5 mx-auto flex justify-between gap-10 mt-24">
                <div className="w-1/2 flex gap-5">
                    <div className="flex flex-col">
                        <div className="w-full bg-green-200 py-2 text-xl text-white-100 text-center mb-5">
                            Others
                        </div>
                        <img src="/images/comparison/c3.png" alt="model" />
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full bg-green-50 py-2 text-xl text-white-100 text-center mb-5">
                            DITTO DOLLS
                        </div>
                        <img src="/images/comparison/c4.png" alt="model" />
                    </div>
                </div>
                <div className="w-1/2 pl-10">
                    <h3 className="text-green-200 text-3xl">
                        Extreme Detailing In 3D File
                    </h3>
                    <h4 className="text-green-200 text-xl font-medium mt-3">
                        High polycount in 3D design
                    </h4>
                    <p className="mt-3 font-light text-lg">
                        Every 3D file have a polycount which is a 3D pixel, even
                        in the 3D file created from the scanning process have
                        very less polycount that’s why the small detailing of
                        accessories, hairs, wrinkles, etc. are missed but we
                        deliver the most high polycount 3d file to make it as
                        realistic as possible
                    </p>
                    <button className="py-4 px-6 text-2xl font-extralight text-white-50 bg-green-50 flex justify-center items-center gap-5 mt-16 rounded-md">
                        CUSTOMIZE NOW
                        <img
                            src="/images/icons/bi_arrow-right.png"
                            alt="right-arrow"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Detailing;
