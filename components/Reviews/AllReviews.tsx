import { useReviews } from "~/hooks/useReviews";
import ReviewItem from "./ReviewItem";

type Props = {
};

const AllReviews = (props: Props) => {
    const { allReviews, loading } = useReviews();

    return (
        <div className="flex flex-col gap-10">
            {
                loading ? <h1>Loading...</h1>
                    : (
                        allReviews?.map((review) => {
                            return (
                                <ReviewItem
                                    key={review.body}
                                    userID={review.author.id}
                                    ratingCount={review.stars}
                                    reviewDes={review.body}
                                    reviewCount={5}
                                />
                            );
                        })
                    )
            }
        </div>
    );
};

export default AllReviews;
