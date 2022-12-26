/* eslint-disable @next/next/no-img-element */
import React from "react";
import Star from "../Star";
import StarFilter from "./StarFilter";

type Props = {
	setShowReviewModel: (a: boolean) => any;
};

const AddReviews = (props: Props) => {
	return (
		<div className="flex gap-8 w-full">
			<div className="flex flex-col gap-8 w-4/5">
				<div
					className="bg-white-50 p-5 border-[2px] flex-wrap rounded-lg border-black/10 flex justify-between items-center gap-3"
					onClick={() => props.setShowReviewModel(true)}
				>
					<div className="items-center flex gap-3">
						<div className="h-10 aspect-square rounded-full bg-green-50" />
						<input type={"text"} placeholder="Write a review..." />
					</div>
					<Star count={0} />
				</div>
				<div className="bg-white-50 p-5 border-[2px] rounded-lg border-black/10 flex flex-col">
					<h2 className="text-[#143A56] text-xl font-medium mb-3 flex gap-3 items-center">
						Reviews{" "}
						<img src="/images/icons/star-gray.png" alt="star" />
						4.7
					</h2>
					<h3 className="text-[#143A56] text-md">1,837 total</h3>
					<div className="h-[2px] w-full bg-black/10 my-5"></div>
					<div className="flex flex-col gap-3">
						<StarFilter label="5-star" progress="80%" />
						<StarFilter label="4-star" progress="80%" />
						<StarFilter label="3-star" progress="80%" />
						<StarFilter label="2-star" progress="80%" />
						<StarFilter label="1-star" progress="80%" />
					</div>
				</div>
			</div>
			<div className="bg-white-50 p-5 border-[2px] rounded-lg border-black/10 w-1/5">
				<h2 className="text-[#143A56] text-xl font-medium mb-3  ">
					Company activity
				</h2>
				<div className="text-md text-[#20454B]/70 divide-y-2">
					<h3 className="py-3">Claimed profile</h3>
					<h3 className="py-3">
						Asks for reviews - positive or negative
					</h3>
					<h3 className="py-3">Payment for extra feature</h3>
					<h3 className="py-3">
						Replied to 100% of negative reviews
					</h3>
					<h3 className="py-3">
						Replies to negative in {"<"} 2 weeks
					</h3>
				</div>
			</div>
		</div>
	);
};

export default AddReviews;
