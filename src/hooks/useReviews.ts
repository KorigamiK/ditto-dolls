import { useCollection } from "react-firebase-hooks/firestore";
import { reviewsCollection } from "~/utils/firebaseClient";
import { Review } from "~/utils/schema";

export const useReviews = () => {
	const [reviews, loading, error] = useCollection(reviewsCollection);

	let allReviews: Review[] = [];

	if (!loading && !error)
		allReviews = reviews!.docs.map((review) => review.data());


	return { allReviews, loading, error };
}
