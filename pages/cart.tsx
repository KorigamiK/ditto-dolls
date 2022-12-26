/* eslint-disable @next/next/no-img-element */
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

type Props = {};

const Cart = (props: Props) => {
    const CART_ITEMS = [];
    return (
        <>
            <Nav />
            <div className="mt-20 py-24 bg-white-100">
                <div className="w-full flex flex-col items-center gap-4">
                    <h2 className="text-4xl font-medium">Shopping Cart</h2>
                    <div className="h-[2px] bg-black/20 w-[200px]"></div>
                </div>
                <div className="w-full py-8 flex justify-center items-center gap-16 text-[#20454B] text-xl mt-10">
                    <div>√ 99% Accuracy</div>
                    <div>√ 2 weeks delivery</div>
                    <div>√ Multiple revisions in 3d file</div>
                    <div>√ made from Photo</div>
                </div>
                {CART_ITEMS.length === 0 ? (
                    <div className="mx-auto space-y-8 mt-10">
                        <img
                            src="/images/icons/cart.svg"
                            alt="cart"
                            className="mx-auto"
                        />
                        <h3 className="text-md text-center">
                            Your shopping cart is currently empty
                        </h3>
                    </div>
                ) : (
                    <div className="text-center mt-10">
                        <h3 className="text-lg text-[#0D2131]">
                            Estimated delievery date: -- -- --
                        </h3>
                        <div className="border-[2px] border-green-200 p-5 rounded-lg w-4/5 mx-auto mt-10">
                            <div className="bg-green-200 p-6 grid place-items-center">
                                <h3 className="text-lg text-white-100">
                                    Estimated delievery date: -- -- --
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
