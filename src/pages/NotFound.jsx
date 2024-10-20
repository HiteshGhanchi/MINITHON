// src/pages/NotFound.jsx

// import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>404 - Page Not Found</h1>
            <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
            <a href="/" style={styles.link}>Go back to Home</a>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    header: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    link: {
        fontSize: '1rem',
        color: '#007bff',
        textDecoration: 'underline',
    },
};

export default NotFound;
