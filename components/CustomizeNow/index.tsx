/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "./Card";

type Props = {};

const CustomizeNow = (props: Props) => {
    return (
        <section className="bg-white-50 py-16">
            <h2 className="text-green-200 text-4xl text-center">
                Life Like 3D Figurines
            </h2>
            <div className="grid grid-cols-3 w-4/5 mx-auto justify-center gap-10 px-10 mt-10">
                <Card img="images/products/p1.png" title="Single" />
                <Card img="images/products/p2.png" title="Couple" />
                <Card img="images/products/p3.png" title="Pet" />
                <Card img="images/products/p4.png" title="Departed Soul" />
                <Card img="images/products/p5.png" title="Baby" />
                <Card img="images/products/p6.png" title="Group" />
            </div>
        </section>
    );
};

export default CustomizeNow;
