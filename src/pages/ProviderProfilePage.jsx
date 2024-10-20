// src/pages/ProviderProfilePage.jsx

// import React from 'react';
// import Header from '../components/ProviderProfilePage/Header'; // Optional, if you want a header here too
import ProviderProfile from '../components/ProvideProfilePage/ProviderProfile'
import ReviewSection from '../components/ProvideProfilePage/ReviewSection';

const ProviderProfilePage = () => {
    return (
        <div>
            {/* <Header /> */}
            <ProviderProfile />
            <ReviewSection />
        </div>
    );
};

export default ProviderProfilePage;
