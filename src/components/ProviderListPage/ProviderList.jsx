// src/components/ProviderListPage/ProviderList.jsx
// 
// import React from 'react';
import ProviderCard from './ProviderCard';

const ProviderList = () => {
    const providers = [
        { id: 1, name: 'Advocate A', rating: 4.5 },
        { id: 2, name: 'Mediator B', rating: 4.0 },
    ];

    
    return (
        <div>
            <h2>Available Providers</h2>
            {providers.map(provider => (
                <ProviderCard key={provider.id} provider={provider} id={provider.id} />
            ))}
        </div>
    );
};

export default ProviderList;
