import React from "react";
import Progress from "./progress";

type Props = {
    label: string;
    progress: string;
};

const StarFilter = (props: Props) => {
    return (
        <div className="flex items-center gap-3">
            <input type={"checkbox"} />
            <h4 className="min-w-[50px]">{props.label}</h4>
            <Progress progress={props.progress} />
            <h4>{props.progress}</h4>
        </div>
    );
};

export default StarFilter;
