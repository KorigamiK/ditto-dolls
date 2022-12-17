import React from "react";

type Props = {};

const VideoDisplay = (props: Props) => {
    return (
        <section className="w-full bg-white-100 py-16">
            <h2 className="text-green-100 text-4xl text-center">
                You Never Get A Second Chance To Make A First Impression
            </h2>
            <div className="w-4/5 p-10 border-[10px] border-green-200 mx-auto bg-orange-50 mt-10">
                <div className="w-full aspect-[2.8/1] bg-black"></div>
            </div>
        </section>
    );
};

export default VideoDisplay;
