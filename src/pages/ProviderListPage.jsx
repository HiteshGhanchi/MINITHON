// src/pages/ProviderListPage.jsx

import { useEffect, useState } from 'react';
// import SearchBar from '../components/ProviderListPage/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProviderList from '../components/ProviderListPage/ProviderList';

const ProviderListPage = () => {
    const [providers, setProviders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('all');
    const [filteredProviders, setFilteredProviders] = useState([]);

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await fetch('/provider.json');
            const data = await response.json();
            setProviders(data);
            setFilteredProviders(data); // Set initial filtered data to all providers
        };

        fetchProviders();
    }, []);

    useEffect(() => {
        const results = providers.filter(provider => {
            const matchesSearchTerm = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSpecialization = selectedSpecialization === 'all' || provider.specialization.toLowerCase() === selectedSpecialization.toLowerCase();
            return matchesSearchTerm && matchesSpecialization;
        });
        setFilteredProviders(results);
    }, [searchTerm, selectedSpecialization, providers]);

    // const handleSearch = (term) => {
    //     setSearchTerm(term);
    // };

    // const handleSpecializationChange = (specialization) => {
    //     setSelectedSpecialization(specialization);
    // };

    return (
        <div>
            {/* <SearchBar onSearch={handleSearch} />
            <FilterOptions onFilterChange={handleSpecializationChange} /> */}
            <Header />
            <ProviderList providers={filteredProviders} />
            <Footer />
        </div>
    );
};

export default ProviderListPage;
