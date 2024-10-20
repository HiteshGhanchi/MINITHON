// src/components/ProviderListPage/ProviderCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProviderCard = ({ provider }) => {
    // Construct the image path
    const imagePath = `/photos/${provider.id}/p.jpeg`;

    return (
        <div className="provider-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 flex flex-col">
            <img 
                src={imagePath} 
                alt={provider.name} 
                className="h-40 w-full object-cover" 
                onError={(e) => {
                    // Fallback to a default image if the specific image fails to load
                    e.target.onerror = null; // Prevent looping
                    e.target.src = "/photos/default.jpg"; // Ensure this default image exists
                }} 
            />
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
                <Link to={`/provider/${provider.id}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">View Profile</Link>
            </div>
        </div>
    );
};

ProviderCard.propTypes = {
    provider: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        specialization: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        hourlyRate: PropTypes.number.isRequired,
        ratings: PropTypes.number.isRequired,
        reviews: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProviderCard;
