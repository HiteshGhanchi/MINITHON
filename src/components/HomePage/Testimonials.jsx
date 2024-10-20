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
        <div className="bg-gray-100 py-8 px-4">
            <h2 className="text-2xl font-bold text-center mb-6">User Testimonials</h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-700 mb-2">{testimonial.message}</p>
                        <p className="font-bold">Rating: {testimonial.rating} ⭐</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
