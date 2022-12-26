import React from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useReviews } from "~/hooks/useReviews";
import { useUsers } from "~/hooks/useUsers";
import { userCollection } from "~/utils/firebaseClient";
import ReviewItem from "./ReviewItem";
import { User } from "~/utils/schema";

type Props = {
    users: User[];
    loading: Boolean;
};

const AllReviews = (props: Props) => {
    const { allReviews, loading } = useReviews();

    return (
        <div className="flex flex-col gap-10">
            {
                // /*
                loading && props.loading ? (
                    <h1>Loading...</h1>
                ) : (
                    allReviews?.map((review) => {
                        return (
                            <ReviewItem
                                key={review.path}
                                name={
                                    props.users?.find((item) => {
                                        console.log(
                                            item.id,
                                            review.author.id,
                                            review.author.path
                                        );
                                        return item.id === review.author.id;
                                    })?.displayName ?? "User"
                                }
                                ratingCount={review.stars}
                                reviewDes={review.body}
                                reviewCount={5}
                            />
                        );
                    })
                )
                // */
            }
        </div>
    );
};

export default AllReviews;
