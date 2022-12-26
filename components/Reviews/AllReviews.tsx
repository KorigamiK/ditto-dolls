import React from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useReviews } from "~/hooks/useReviews";
import { useUsers } from "~/hooks/useUsers";
import { userCollection } from "~/utils/firebaseClient";
import ReviewItem from "./ReviewItem";

type Props = {};

const AllReviews = (_props: Props) => {

	const { allReviews, loading } = useReviews();
	const { allUsers, loading: userLoading } = useUsers();
	console.log(allReviews, allUsers);

	return (
		<div className="flex flex-col gap-10">

			{
				// /*
				loading && userLoading ? <h1>Loading...</h1>
					: allReviews?.map((review) => {
						return (
							<ReviewItem key={review.path} name={allUsers?.find(item => item.id === review.author.id).displayName || 'hi'} ratingCount={review.stars} reviewDes={review.body} reviewCount={5} />
						)
					})
				// */
			}
		</div>
	);
};

export default AllReviews;
