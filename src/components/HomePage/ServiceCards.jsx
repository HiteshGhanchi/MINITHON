// src/components/ServiceCard.jsx

// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Hourly Rate: ₹{service.hourlyRate}</p>
            <p>Rating: {service.rating}</p>
            <button onClick={() => alert('Service booked!')}>Book Service</button>
        </div>
    );
};

// Define prop types for ServiceCard
ServiceCard.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        hourlyRate: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default ServiceCard;
