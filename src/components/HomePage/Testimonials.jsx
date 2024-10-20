// src/components/Testimonials.jsx

// import React from 'react';

const testimonialsData = [
    {
        id: 1,
        name: "Aditi Sharma",
        message: "The legal services I received were outstanding! Highly recommend this platform.",
        rating: 5,
    },
    {
        id: 2,
        name: "Ravi Kumar",
        message: "Great experience! The booking process was simple and the lawyer was very professional.",
        rating: 4,
    },
    {
        id: 3,
        name: "Priya Singh",
        message: "I was really impressed with the quality of service. Thank you for connecting me with the right lawyer!",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>User Testimonials</h2>
            {testimonialsData.map(testimonial => (
                <div key={testimonial.id} className="testimonial">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.message}</p>
                    <p>Rating: {testimonial.rating} ⭐</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
