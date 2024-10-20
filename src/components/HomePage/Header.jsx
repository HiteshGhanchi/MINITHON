// src/components/HomePage/Header.jsx

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-blue-800 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">LegalEase</Link>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link className="text-white hover:text-yellow-300 transition duration-200" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-yellow-300 transition duration-200" to="/providers">Providers</Link>
                    </li>
                    {/* Uncomment if you need user profile and booking links */}
                    {/* <li>
                        <Link className="text-white hover:text-yellow-300 transition duration-200" to="/user-profile">User Profile</Link>
                    </li> */}
                    {/* <li>
                        <Link className="text-white hover:text-yellow-300 transition duration-200" to="/booking">Booking</Link>
                    </li> */}
                    <li>
                        <Link className="text-white hover:text-yellow-300 transition duration-200" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
