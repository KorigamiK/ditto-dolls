/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const NewOrder = () => {
    const [order, setOrder] = useState({
        peopleAmount: 0,
        petAmount: 0,
        babyAmount: 0,
    });
    const [showSupportingImage, setShowSupportingImage] = useState(false);

    return (
        <>
            <Nav />
            <div className="py-32 mt-20 bg-white-100">
                <div className="w-4/5 mx-auto grid grid-cols-2">
                    <div className="px-10 ">
                        <div className="bg-[#D9D9D9] grid place-items-center p-20 rounded-lg">
                            <img src="/images/icons/upload.svg" alt="upload" />
                        </div>
                        <h3 className="text-center font-medium text-lg mt-3">
                            Upload Image <sup>*</sup>
                        </h3>
                        <form>
                            <h3 className="text-lg mb-3 mt-5">
                                Attach stand to figurine?
                            </h3>
                            <label className="flex items-center gap-3">
                                <input type={"radio"} name="figurine" />
                                <h4>Yes</h4>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type={"radio"} name="figurine" />
                                <h4>No</h4>
                            </label>
                        </form>
                    </div>
                    <div>
                        <h3 className="bg-green-300 py-3 text-white-100 text-center rounded-md text-lg">
                            Flat 25% Off on more than 1 Character
                        </h3>
                        <div className="mt-5 space-y-3">
                            <NumberField
                                title="Number of People"
                                price={249}
                                onChange={(value) => {
                                    setOrder((prev) => {
                                        return {
                                            ...prev,
                                            peopleAmount: value,
                                        };
                                    });
                                }}
                            />
                            <NumberField
                                title="Number of Pet"
                                price={149}
                                onChange={(value) => {
                                    setOrder((prev) => {
                                        return {
                                            ...prev,
                                            petAmount: value,
                                        };
                                    });
                                }}
                            />
                            <NumberField
                                title="Number of Baby"
                                price={99}
                                onChange={(value) => {
                                    setOrder((prev) => {
                                        return {
                                            ...prev,
                                            babyAmount: value,
                                        };
                                    });
                                }}
                            />
                            <div className="bg-[#D9D9D9]/50 rounded-lg w-full px-5 py-3 flex justify-between items-center">
                                <h2 className="text-lg font-semibold h-8">
                                    Total Amount
                                </h2>
                                <div className="flex items-center gap-3">
                                    <h3 className="w-16">
                                        $
                                        {order.babyAmount +
                                            order.peopleAmount +
                                            order.petAmount}
                                    </h3>
                                </div>
                            </div>
                            <div
                                className="bg-[#D9D9D9]/50 rounded-lg w-full px-5 py-3 flex justify-between items-center hover:cursor-pointer"
                                onClick={() =>
                                    setShowSupportingImage(!showSupportingImage)
                                }
                            >
                                <h2 className="text-lg font-semibold h-8">
                                    Upload Supporting Images
                                </h2>
                                <button className="w-16">
                                    <img
                                        src="/images/icons/chevron-down.svg"
                                        alt="arrow"
                                    />
                                </button>
                            </div>
                            {/* add supporting images */}
                            {showSupportingImage && (
                                <div className="space-y-6 py-5">
                                    <div className="max-w-[300px] space-y-4">
                                        <p className="text-md text-green-300 font-medium">
                                            Upload front facing images of
                                            members whose faces are not clearly
                                            visible
                                        </p>
                                        <div className="flex gap-3">
                                            <input
                                                type="file"
                                                name="front-face"
                                                className="bg-white-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="max-w-[300px] space-y-4">
                                        <p className="text-md text-green-300 font-medium">
                                            Upload side face, back side design,
                                            tattoo, accessories, any other
                                            details
                                        </p>
                                        <div className="flex gap-3">
                                            <input
                                                type="file"
                                                name="front-face"
                                                className="bg-white-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <h2 className="text-lg font-semibold h-8">
                                Note for instructions
                            </h2>
                            <textarea
                                className="border-[2px] rounded-lg border-black/10 p-3 w-full"
                                rows={6}
                            />
                            <div className="w-full flex justify-between">
                                <button className="bg-green-50 py-3 px-5 rounded-md text-white-50">
                                    Delete
                                </button>
                                <button className="bg-green-300 py-3 px-5 rounded-md text-white-50">
                                    Add More
                                </button>
                            </div>
                            <div className="h-5"></div>
                            <div className="h-[2px] w-full bg-green-100/20 my-10"></div>
                            <div className="h-5"></div>
                            <div className="flex justify-end gap-5 items-center">
                                <h3 className="text-lg text-green-100/40 font-semibold line-through">
                                    $
                                    {order.babyAmount +
                                        order.peopleAmount +
                                        order.petAmount}
                                </h3>
                                <h3 className="text-lg text-green-100 font-semibold">
                                    $
                                    {order.babyAmount +
                                        order.peopleAmount +
                                        order.petAmount -
                                        120}
                                </h3>
                                <button className="bg-green-50 py-3 px-5 rounded-md text-white-50">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const NumberField = ({
    title,
    price,
    onChange,
}: {
    title: string;
    price: number;
    onChange: (a: number) => void;
}) => {
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        onChange(price * totalAmount);
    }, [totalAmount, onChange, price]);

    return (
        <div className="bg-[#D9D9D9]/50 rounded-lg w-full px-5 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex items-center gap-3">
                <Counter onChange={(value) => setTotalAmount(value)} />
                <h3 className="w-16">${price * totalAmount}</h3>
            </div>
        </div>
    );
};

const Counter = ({ onChange }: { onChange: (a: number) => void }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        onChange(value);
    }, [value, onChange]);

    return (
        <div className="flex items-center gap-1 w-fit">
            <button
                onClick={() => {
                    setValue((prev) => (prev >= 1 ? prev - 1 : 0));
                }}
                className="h-8 aspect-square hover:bg-black/10 transition-all rounded-full grid place-items-center"
            >
                <img src="/images/icons/minus.svg" alt="minus" />
            </button>
            <h4 className="bg-[#D9D9D9]/30 p-3">{value}</h4>
            <button
                onClick={() => {
                    setValue((prev) => prev + 1);
                }}
                className="h-8 aspect-square hover:bg-black/10 transition-all rounded-full grid place-items-center"
            >
                <img src="/images/icons/plus.svg" alt="plus" />
            </button>
        </div>
    );
};

export default NewOrder;
