// src/App.jsx

// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import ProviderListPage from '../src/pages/ProviderListPage';
import ProviderProfilePage from '../src/pages/ProviderProfilePage';
import UserProfilePage from './pages/userProfilePage';
import BookingPage from '../src/pages/BookingPage';
import ContactUsPage from '../src/pages/ContactUsPage';
import NotFound from '../src/pages/NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/providers" element={<ProviderListPage />} />
                <Route path="/provider/:id" element={<ProviderProfilePage />} />
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            </Routes>
        </Router>
    );
};

export default App;
