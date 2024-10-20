// src/components/ProviderProfilePage/ProviderProfile.jsx

// import React from 'react';

const ProviderProfile = () => {
    // Dummy data for the profile
    const provider = {
        name: 'Advocate A',
        bio: 'Experienced in criminal law.',
        hourlyRate: '2000',
    };

    return (
        <div>
            <h1>{provider.name}</h1>
            <p>{provider.bio}</p>
            <p>Hourly Rate: {provider.hourlyRate}</p>
        </div>
    );
};

export default ProviderProfile;
