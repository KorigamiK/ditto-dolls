import React from "react";
import ReviewItem from "./ReviewItem";

type Props = {};

const AllReviews = (props: Props) => {
    const reviews = [
        {
            name: "Joe taylor",
            reviewCount: 4,
            ratingCount: 4,
            description:
                "Thank you 3d miniature team for such an beautiful and awesome statue..... thanks to the team for contacting, coordinating and fast delivery too....very happy and we like to come back for more surely....👍 I appreciate all the team and all the best for future too... Thank you once again",
        },
        {
            name: "Joe taylor",
            reviewCount: 4,
            ratingCount: 4,
            description:
                "Thank you 3d miniature team for such an beautiful and awesome statue..... thanks to the team for contacting, coordinating and fast delivery too....very happy and we like to come back for more surely....👍 I appreciate all the team and all the best for future too... Thank you once again",
        },
        {
            name: "Joe taylor",
            reviewCount: 4,
            ratingCount: 4,
            description:
                "Thank you 3d miniature team for such an beautiful and awesome statue..... thanks to the team for contacting, coordinating and fast delivery too....very happy and we like to come back for more surely....👍 I appreciate all the team and all the best for future too... Thank you once again",
        },
    ];
    return (
        <div className="flex flex-col gap-10">
            {reviews.map((item, idx) => (
                <ReviewItem
                    name={item.name}
                    ratingCount={item.ratingCount}
                    reviewCount={item.reviewCount}
                    reviewDes={item.description}
                    key={idx}
                />
            ))}
        </div>
    );
};

export default AllReviews;
