/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import FaqItem from "../components/Faq/FaqItem";

type Props = {};

const Faq = (props: Props) => {
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
        {
            id: 5,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 6,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 7,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 8,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 9,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 10,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 11,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 12,
            heading: "Do I need to visit DittoDolls Store?",
            subheading: "no",
        },
        {
            id: 13,
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
        <>
            <Nav />
            <div className="py-16 mt-20">
                <h2 className="text-3xl font-bold mb-4 text-center">FAQ</h2>
                <h4 className="text-lg font-light text-center">
                    Fairly Asked Questions
                </h4>
                <div className="w-4/5 mx-auto grid grid-cols-2 mt-10 gap-10">
                    <div>
                        {FAQS.map((item, idx) => {
                            if (idx % 2 === 0)
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
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Faq;
