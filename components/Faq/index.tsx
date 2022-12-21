/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import FaqItem from "./FaqItem";
import Link from "next/link";

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState<number>(-1);

    const handleClick = (index: number) => {
        setActiveQuestion(index === activeQuestion ? 0 : index);
    };

    const FAQS = [
        {
            id: 0,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 2,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 3,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 4,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
    ];

    const FAQClickHandler = (id: number) => {
        if (id === activeQuestion) {
            setActiveQuestion(-1);
        } else setActiveQuestion(id);
    };

    return (
        <div className="py-16">
            <h2 className="text-3xl font-bold mb-4 text-center">FAQ</h2>
            <h4 className="text-lg font-light text-center">
                Fairly Asked Questions
            </h4>
            <div className="w-4/5 mx-auto grid grid-cols-2 mt-10 gap-10">
                <div>
                    {FAQS.map((item, idx) => {
                        if (idx % 2)
                            return (
                                <FaqItem
                                    onClick={FAQClickHandler}
                                    ID={item.id}
                                    activeID={activeQuestion}
                                    heading={item.heading}
                                    description={item.subheading}
                                    key={item.id}
                                />
                            );
                    })}
                </div>
                <div>
                    {FAQS.map((item, idx) => {
                        if (!(idx % 2))
                            return (
                                <FaqItem
                                    onClick={FAQClickHandler}
                                    ID={item.id}
                                    activeID={activeQuestion}
                                    heading={item.heading}
                                    description={item.subheading}
                                    key={item.id}
                                />
                            );
                    })}
                </div>
            </div>
            <div className="w-4/5 mx-auto flex justify-end mt-10">
                <Link href={"/faq"} className="">
                    <div className="flex items-center gap-2 text-right">
                        Read more FAQs here{" "}
                        <img
                            src="/images/icons/bi_arrow-right-gray.png"
                            alt="right-arrow"
                        />{" "}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FAQ;
