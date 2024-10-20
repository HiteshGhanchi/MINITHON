// src/components/BookingForm.jsx

import  { useState } from 'react';
import PropTypes from 'prop-types';

const BookingForm = ({ providerName, onBook }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = {
            providerName,
            date,
            time,
            service,
        };
        onBook(bookingDetails); // Callback to handle booking
        setDate('');
        setTime('');
        setService('');
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h2>Book Service with {providerName}</h2>
            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <label>
                Time:
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </label>
            <label>
                Service:
                <input
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="Describe the service"
                    required
                />
            </label>
            <button type="submit">Book Now</button>
        </form>
    );
};

BookingForm.propTypes = {
    providerName: PropTypes.string.isRequired,
    onBook: PropTypes.func.isRequired,
};

export default BookingForm;
