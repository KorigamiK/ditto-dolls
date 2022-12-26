/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <>
            <div className="w-full py-8 flex justify-center items-center gap-16 text-white-100 bg-green-50 text-xl uppercase">
                We Craft The Most Realistic 3D Miniatures in the world
            </div>
            <div className="bg-green-200 w-full py-10">
                <div className="w-4/5 mx-auto flex justify-between text-white-100">
                    <div>
                        <img src="/images/logo-square.png" alt="logo" />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3">
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                            <li>How to Order</li>
                        </ul>
                    </div>
                    <div className="w-fit">
                        <h4>OUR SOCIALS</h4>
                        <div className="grid grid-cols-2 gap-3 w-fit mx-auto mt-2">
                            <img src="/images/icons/facebook.png" alt="" />
                            <img src="/images/icons/insta.png" alt="" />
                            <img src="/images/icons/linkedin.png" alt="" />
                            <img src="/images/icons/youtube.png" alt="" />
                        </div>
                    </div>
                </div>
                <div
                    className="w-4/5 flex justify-center mx-auto gap-6 mt-16
            "
                >
                    <img src="/images/visa.png" alt="visa" className="h-6" />
                    <img
                        src="/images/paypal.png"
                        alt="paypal"
                        className="h-6"
                    />
                </div>
                <h4 className="text-md text-center text-white-100 pt-2">
                    Copyright@2022 DittoDolls Pvt. Ltd. All right Reserved.
                </h4>
            </div>
        </>
    );
};

export default Footer;
