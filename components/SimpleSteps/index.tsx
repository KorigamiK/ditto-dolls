import React from "react";

type Props = {};

const SimpleSteps = (props: Props) => {
    return (
        <div className="bg-green-200 py-16">
            <h2 className="text-white-100 text-4xl text-center">
                Simple Steps To Customize Your 3D Figurine
            </h2>
            <div className="flex w-4/5 mx-auto justify-between mt-20">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-16 aspect-square bg-green-50 rounded-full grid place-items-center text-xl">
                        1
                    </div>
                    <div className="text-white-100 text-xl">Upload Image</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="h-16 aspect-square bg-green-50 rounded-full grid place-items-center text-xl">
                        2
                    </div>
                    <div className="text-white-100 text-xl">
                        Specify Instructions
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="h-16 aspect-square bg-green-50 rounded-full grid place-items-center text-xl">
                        3
                    </div>
                    <div className="text-white-100 text-xl">
                        Finalize 3D Model
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="h-16 aspect-square bg-green-50 rounded-full grid place-items-center text-xl">
                        4
                    </div>
                    <div className="text-white-100 text-xl">
                        Track your Orders
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleSteps;
