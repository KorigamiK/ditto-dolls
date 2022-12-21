import React from "react";

type Props = {
    onClick: (a: number) => void;
    activeID: number;
    ID: number;
    heading: string;
    description: string;
};

const FaqItem = ({ onClick, activeID, ID, heading, description }: Props) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4 w-full">
            <button
                className="block w-full text-left px-4 py-3 font-bold text-xl leading-tight"
                onClick={() => onClick(ID)}
            >
                {heading}
                <span className="float-right mt-1 text-sm font-semibold text-gray-600">
                    {activeID === ID ? "-" : "+"}
                </span>
            </button>
            <div
                className={`${
                    activeID === ID ? "block min-h-0" : "hidden min-h-0"
                } px-4 py-3 mb-4 transition duration-500 ease-in-out transform`}
                style={{
                    transform: activeID === ID ? "scaleY(1)" : "scaleY(0)",
                }}
            >
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
        </div>
    );
};

export default FaqItem;
