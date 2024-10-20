// src/components/ProviderListPage/ProviderCard.jsx

// import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes



const ProviderCard = ({ provider,id }) => {

    if (!id) {
        return <p>Error: No ID available for this provider.</p>;
    }

    return (
        <div>
            <h3>{provider?.name}</h3>
            {/* <p>{id}</p> */}
            <p>Rating: {provider?.rating}</p>
            <Link to={`/provider/${id}`}>View Profile</Link>
        </div>
    );
};

ProviderCard.propTypes = {
    provider: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProviderCard;
