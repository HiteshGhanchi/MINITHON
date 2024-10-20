// src/components/UserProfilePage/UserProfile.jsx

// import React from 'react';

const UserProfile = () => {
    const user = {
        name: 'User A',
        email: 'user@example.com',
    };

    return (
        <div>
            <h1>{user.name} Profile</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
