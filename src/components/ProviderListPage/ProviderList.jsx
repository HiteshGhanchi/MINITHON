// src/components/ProviderListPage/ProviderListPage.jsx

import React, { useEffect, useState } from 'react';
import FilterOptions from './FilterOptions';
import ProviderCard from './ProviderCard';
import SearchBar from './SearchBar';

const ProviderListPage = () => {
    const [providers, setProviders] = useState([]);
    const [filteredProviders, setFilteredProviders] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('all');

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await fetch('/providers.json'); // Update this path if necessary
            const data = await response.json();
            setProviders(data);
            setFilteredProviders(data); // Initially show all providers
        };

        fetchProviders();
    }, []);

    useEffect(() => {
        const filterProviders = () => {
            let updatedProviders = providers;

            if (selectedSpecialization !== 'all') {
                updatedProviders = updatedProviders.filter(provider => 
                    provider.specialization.toLowerCase() === selectedSpecialization.toLowerCase()
                );
            }

            if (searchInput) {
                updatedProviders = updatedProviders.filter(provider => 
                    provider.name.toLowerCase().includes(searchInput.toLowerCase())
                );
            }

            setFilteredProviders(updatedProviders);
        };

        filterProviders();
    }, [searchInput, selectedSpecialization, providers]);

    return (
        <div className="provider-list-page p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Legal Service Providers</h1>
            <SearchBar onSearch={setSearchInput} />
            <FilterOptions onFilterChange={setSelectedSpecialization} />
            <div className="provider-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProviders.length > 0 ? (
                    filteredProviders.map(provider => (
                        <ProviderCard key={provider.id} provider={provider} />
                    ))
                ) : (
                    <p>No providers found.</p>
                )}
            </div>
        </div>
    );
};

export default ProviderListPage;
