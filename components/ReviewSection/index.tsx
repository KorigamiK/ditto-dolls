/* eslint-disable @next/next/no-img-element */
import React from "react";
import Star from "../Star";
import Link from "next/link";

const ReviewSection = () => {
    return (
        <section className="py-16 bg-white-100">
            <div className="w-3/4 mx-auto">
                <h2 className="text-green-200 text-4xl text-center">
                    You ‘re in good company
                </h2>
                <h4 className="text-green-300 text-lg text-center mt-3">
                    We love our customers, and they seem to love us right back.
                    find out what they’ve got to say about us
                </h4>
                <div className="flex justify-between items-center mt-10">
                    <div>
                        <h3 className="text-green-300 text-2xl text-center mb-5">
                            3
                        </h3>
                        <Star count={3} />
                    </div>
                    <div className="relative isolate my-20">
                        <div className="h-[90px] aspect-square  bg-black/10 rounded-full absolute -z-10 -top-[45px] -left-[45px]"></div>
                        <div className="h-[150px] aspect-square -mt-10 bg-green-300 rounded-full absolute -z-10 -bottom-[75px] -right-[75px]"></div>
                        <div className="h-[300px] aspect-square bg-black rounded-md border-white-100 border-[5px]"></div>
                    </div>
                    <div className="max-w-[500px] flex flex-col gap-3">
                        <Star count={3} />
                        <h4 className="text-green-300 text-lg font-bold">
                            Name
                        </h4>
                        <p className="text-green-300 text-lg">
                            Thank you 3d miniature team for such an beautiful
                            and awesome statue..... thanks to the team for
                            contacting, coordinating and fast delivery
                            too....very happy and we like to come back for more
                            surely....👍 I appreciate all the team and all the
                            best for future too... Thank you once again
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto flex justify-end mt-10">
                <Link href={"/reviews"} className="">
                    <div className="flex items-center gap-2 text-right">
                        Read more reviews here{" "}
                        <img
                            src="/images/icons/bi_arrow-right-gray.png"
                            alt="right-arrow"
                        />{" "}
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ReviewSection;
