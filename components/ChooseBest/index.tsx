/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const ChooseBest = (props: Props) => {
    return (
        <section className="bg-green-200 py-16">
            <div className="text-white-100 w-4/5 mx-auto flex justify-between">
                <div className="w-1/2 pl-10">
                    <h3 className="text-3xl">Choose the Best !</h3>
                    <h4 className="text-xl font-medium mt-3">
                        If you have Choices, Choose the Best
                    </h4>
                    <button className="py-4 px-6 text-2xl font-extralight text-white-50 bg-green-50 flex justify-center items-center gap-5 mt-16 rounded-md">
                        CUSTOMIZE NOW
                        <img
                            src="/images/icons/bi_arrow-right.png"
                            alt="right-arrow"
                        />
                    </button>
                </div>
                <div className="flex flex-col gap-10">
                    <ChooseItem
                        icon="/images/icons/highdef.svg"
                        heading="High Definition 3D Miniature"
                        description="Small details like Dress Wrinkles, Shoe Laces, Hair Texture, Watch, Ring, Spackes, Bands in 3D"
                    />
                    <ChooseItem
                        icon="/images/icons/accuracy.svg"
                        heading="99% Accuracy"
                        description="Not a Blurry Face, Perfect Dimensions, Pose, Expression, Dress, Accessories and Color tone will be Close as Possible"
                    />
                    <ChooseItem
                        icon="/images/icons/unlimited.svg"
                        heading="Unlimited Revisions in 3D file"
                        description="We send 3D File before Printing, you can ask for changes in 3D File as many times as you want"
                    />
                    <ChooseItem
                        icon="/images/icons/customization.svg"
                        heading="Customization available"
                        description="It’s Possible to change your dress, dress color, Skin tone, face marks, shoes, hair style, beard, body structure"
                    />
                </div>
            </div>
        </section>
    );
};

const ChooseItem = ({
    icon,
    heading,
    description,
}: {
    icon: string;
    heading: string;
    description: string;
}) => {
    return (
        <div className="flex justify-start gap-5 items-start">
            <img src={icon} alt="icon" />
            <div>
                <h4 className="text-xl">{heading}</h4>
                <p className="font-light">{description}</p>
            </div>
        </div>
    );
};
export default ChooseBest;
