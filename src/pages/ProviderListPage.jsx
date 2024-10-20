// src/pages/ProviderListPage.jsx

// import React from 'react';
// import Header from '../components/ProviderListPage/Header'; // You may add a header for this page too
import ProviderList from '../components/ProviderListPage/ProviderList';
import FilterOptions from '../components/ProviderListPage/FilterOptions';
import SearchBar from '../components/ProviderListPage/SearchBar';

const ProviderListPage = () => {
    return (
        <div>
            {/* <Header /> */}
            <SearchBar />
            <FilterOptions />
            <ProviderList />
        </div>
    );
};

export default ProviderListPage;
