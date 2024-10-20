// src/components/ServiceCard.jsx

import PropTypes from 'prop-types';

const DEFAULT_PHOTO_URL = 'https://via.placeholder.com/20'; // Default placeholder image URL

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200">
            <img
                src={service.photo || DEFAULT_PHOTO_URL} // Use default photo if service.photo is not available
                alt={service.name}
                className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-700 mb-2">{service.description}</p>
            <p className="font-bold mb-1">Hourly Rate: ₹{service.hourlyRate}</p>
            <p className="text-gray-600">Rating: {service.ratings} ({service.ratings} reviews)</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-500 transition duration-200">
                Book Service
            </button>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        hourlyRate: PropTypes.number.isRequired,
        ratings: PropTypes.number.isRequired,
        photo: PropTypes.string, // Make photo optional
    }).isRequired,
};

export default ServiceCard;
