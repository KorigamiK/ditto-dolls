/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

const Nav = (_props: Props) => {
	return (
		<div className="fixed top-0 bg-green-200 z-50 text-white-100 w-full">
			<div className="flex justify-between items-center w-4/5 mx-auto py-5">
				<div className="flex items-center gap-5 relative">
					<img
						src={"/images/logo.svg"}
						alt="logo"
						className="absolute h-28 -top-5"
					/>
					<div className="flex items-center justify-between gap-8 ml-36">
						<div>Home</div>
						<div>About Us</div>
						<div>Our Products</div>
					</div>
				</div>
				<button className="bg-green-50 py-3 px-5 rounded-md">
					Order Now
				</button>
			</div>
		</div>
	);
};

export default Nav;
