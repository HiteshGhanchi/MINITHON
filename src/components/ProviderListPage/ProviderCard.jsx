// src/components/ProviderListPage/ProviderCard.jsx

import React from 'react';

const ProviderCard = ({ provider }) => {
    return (
        <div className="provider-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 flex flex-col">
            <img src={provider.photo} alt={provider.name} className="h-40 w-full object-cover" />
            <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold mb-1">{provider.name}</h2>
                <p className="text-gray-600">{provider.profession}</p>
                <p className="text-gray-500">{provider.specialization}</p>
                <p className="text-gray-700 mt-2">{provider.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-lg">₹{provider.hourlyRate}/hr</span>
                    <div className="flex items-center">
                        <span className="text-yellow-500">{'★'.repeat(Math.round(provider.ratings))}</span>
                        <span className="text-gray-500 ml-1">({provider.reviews} reviews)</span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">View Profile</button>
            </div>
        </div>
    );
};

export default ProviderCard;
