import React from "react";

type Props = {
    progress: string;
};

const Progress = (props: Props) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: props.progress }}
            ></div>
        </div>
    );
};

export default Progress;
