// src/components/ProviderListPage/SearchBar.jsx

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex justify-center mb-4">
            <input
                type="text"
                placeholder="Search providers..."
                className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchInput}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
