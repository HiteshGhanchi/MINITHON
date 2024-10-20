// src/pages/UserProfilePage.jsx

// import React from 'react';
// import Header from '../components/UserProfilePage/Header'; // Optional header
import UserProfile from '../components/UserProfilePage/UserProfile';
import AppointmentHistory from '../components/UserProfilePage/AppointmentHistory';

const UserProfilePage = () => {
    return (
        <div>
            {/* <Header /> */}
            <UserProfile />
            <AppointmentHistory />
        </div>
    );
};

export default UserProfilePage;
