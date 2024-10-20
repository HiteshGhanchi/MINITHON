// src/components/AppointmentCard.jsx

// import React from 'react';
import PropTypes from 'prop-types';

const AppointmentCard = ({ appointment }) => {
    return (
        <div className="appointment-card">
            <h3>{appointment.providerName}</h3>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Service: {appointment.service}</p>
            <p>Status: {appointment.status}</p>
        </div>
    );
};

AppointmentCard.propTypes = {
    appointment: PropTypes.shape({
        providerName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        service: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default AppointmentCard;
