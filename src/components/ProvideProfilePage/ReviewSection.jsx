// src/components/ProviderProfilePage/ReviewSection.jsx

// import React from 'react';

const ReviewSection = () => {
    const reviews = [
        { user: 'John', comment: 'Very helpful and professional!' },
        { user: 'Jane', comment: 'I highly recommend their services!' },
    ];

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p><strong>{review.user}</strong>: {review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewSection;
