/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Star from "../components/Star";
import Link from "next/link";

import AllReviews from "../components/Reviews/AllReviews";
import AddReviews from "../components/Reviews/AddReviews";
import ReviewModel from "../components/Reviews/ReviewModel";

import useAuth from "~/hooks/useAuth";

type Props = {};

const Reviews = (_props: Props) => {
	const [showReviewModel, setShowReviewModel] = useState(false);

	const [user] = useAuth();

	return (
		<>
			<Nav />
			<div className="py-32 mt-20 bg-white-100">
				<ReviewModel
					showModel={showReviewModel}
					setShowReviewModel={setShowReviewModel}
					user={user}
				/>
				<div className="w-4/5 mx-auto">
					<div className="flex w-full justify-between">
						<div className="flex gap-6">
							<img
								src="/images/logo-green.png"
								className="h-[150px]"
								alt="logo"
							/>
							<div className="flex flex-col gap-2 justify-between">
								<h2 className="font-bold text-4xl">
									DITTO DOLLS
								</h2>
								<div className="flex gap-4">
									<span>Reviews 1,837</span>
									<span>Excellent</span>
								</div>
								<Star count={4} />
								<div className="bg-[#11A0A0] flex text-white-50 gap-2 items-center w-fit px-2 rounded-sm">
									<img
										src="/images/icons/tick.png"
										alt="tick"
									/>
									Verified Company
								</div>
							</div>
						</div>
						<div className="border-[2px] border-green-300/50 rounded-lg self-start p-4 ">
							<Link href={"/"}>
								<div className="flex gap-2 items-center">
									<img
										src="/images/icons/anchor.png"
										alt="anchor"
									/>
									<h3 className="text-green-300 text-lg font-medium">
										http://www.mydittodoll.com
									</h3>
								</div>
							</Link>
							<h3 className="text-green-300 text-lg">
								Visit this website
							</h3>
						</div>
					</div>
					<div className="h-[100px]"></div>
					<AddReviews setShowReviewModel={setShowReviewModel} />
					<div className="h-8"></div>
					<AllReviews />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Reviews;
