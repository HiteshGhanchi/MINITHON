// src/components/HomePage/Footer.jsx

// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
                <p className="text-xs">Follow us on 
                    <a href="#" className="text-blue-400 hover:underline mx-1">Facebook</a>,
                    <a href="#" className="text-blue-400 hover:underline mx-1">Twitter</a>, and 
                    <a href="#" className="text-blue-400 hover:underline mx-1">Instagram</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
