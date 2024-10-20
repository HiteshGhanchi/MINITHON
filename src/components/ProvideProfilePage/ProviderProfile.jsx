// src/components/ProviderProfilePage/ProviderProfile.jsx

// import React from 'react';

const ProviderProfile = ({ provider }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                    <img 
                        src={provider.photo} 
                        alt={`${provider.name}`} 
                        className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-indigo-500"
                    />
                </div>
                <div className="md:ml-8 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-indigo-600">{provider.name}</h1>
                    <p className="text-xl text-gray-600 mt-2">{provider.profession}</p>
                    <p className="text-lg text-gray-500 mt-1">{provider.specialization}</p>
                    <p className="text-lg mt-4">{provider.description}</p>
                    <p className="text-lg font-semibold mt-6">
                        <span className="text-gray-700">Hourly Rate: </span>
                        <span className="text-indigo-600">₹{provider.hourlyRate}</span>
                    </p>
                    <p className="text-lg font-semibold mt-2">
                        <span className="text-gray-700">Ratings: </span>
                        <span className="text-yellow-500">{provider.ratings} / 5 ⭐</span>
                    </p>
                </div>
            </div>

            {/* Reviews Section */}
            {provider?.reviews && provider?.reviews.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-gray-800">Client Reviews</h2>
                    <div className="grid gap-6 mt-4 md:grid-cols-2">
                        {provider?.reviews.map((review, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800">{review.user}</h3>
                                <p className="text-gray-600 mt-1">{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProviderProfile;
