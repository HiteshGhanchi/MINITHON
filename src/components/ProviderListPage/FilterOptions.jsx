// src/components/ProviderListPage/FilterOptions.jsx

// import React from 'react';

const FilterOptions = () => {
    return (
        <div>
            <h4>Filter by:</h4>
            <select>
                <option value="all">All</option>
                <option value="advocates">Advocates</option>
                <option value="mediators">Mediators</option>
                <option value="notaries">Notaries</option>
            </select>
        </div>
    );
};

export default FilterOptions;
