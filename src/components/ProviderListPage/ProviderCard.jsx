import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProviderCard = ({ provider }) => {
    const imagePath = provider.photo;

    return (
        <div className="provider-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 flex flex-col">
            <div className="h-40 w-full relative">
                <img 
                    src={imagePath} 
                    alt={provider.name} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/photos/default.jpg"; // Fallback image
                    }} 
                />
            </div>
            <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold mb-1">{provider.name}</h2>
                <p className="text-gray-600">{provider.profession}</p>
                <p className="text-gray-500">{provider.specialization}</p>
                <p className="text-gray-700 mt-2">{provider.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-lg">₹{provider.hourlyRate}/hr</span>
                    <div className="flex items-center">
                        <span className="text-yellow-500">{'★'.repeat(Math.round(provider.ratings))}</span>
                        <span className="text-gray-500 ml-1">({provider.reviews.length} reviews)</span>
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
        photo: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        hourlyRate: PropTypes.number.isRequired,
        ratings: PropTypes.number.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.shape({
            user: PropTypes.string.isRequired,
            review: PropTypes.string.isRequired,
        })).isRequired,
    }).isRequired,
};

export default ProviderCard;
