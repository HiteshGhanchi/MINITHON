// src/components/HomePage/Header.jsx

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/providers">Providers</Link></li>
                {/* <li><Link to="/user-profile">User Profile</Link></li> */}
                {/* <li><Link to="/booking">Booking</Link></li> */}
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
