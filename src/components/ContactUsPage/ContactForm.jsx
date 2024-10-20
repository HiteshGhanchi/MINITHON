// src/components/ContactUsPage/ContactForm.jsx

// import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <label>
                Name:
                <input type="text" required />
            </label>
            <label>
                Email:
                <input type="email" required />
            </label>
            <label>
                Message:
                <textarea required></textarea>
            </label>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
