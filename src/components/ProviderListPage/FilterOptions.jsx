// src/components/ProviderListPage/FilterOptions.jsx

import React from 'react';

const FilterOptions = ({ onFilterChange }) => {
    const handleChange = (e) => {
        onFilterChange(e.target.value); // Pass selected specialization to parent
    };

    return (
        <div>
            <h4 className="mb-2">Filter by:</h4>
            <select onChange={handleChange} className="border border-gray-300 rounded-lg p-2">
                <option value="all">All</option>
                <option value="criminal law">Criminal Law</option>
                <option value="family law">Family Law</option>
                <option value="commercial arbitration">Commercial Arbitration</option>
                <option value="corporate law">Corporate Law</option>
                <option value="workplace mediation">Workplace Mediation</option>
                <option value="real estate law">Real Estate Law</option>
                <option value="document verification">Document Verification</option>
                <option value="intellectual property law">Intellectual Property Law</option>
                <option value="civil disputes">Civil Disputes</option>
                <option value="environmental law">Environmental Law</option>
                <option value="contract drafting">Contract Drafting</option>
                <option value="tax law">Tax Law</option>
                <option value="employment law">Employment Law</option>
                <option value="family mediation">Family Mediation</option>
                <option value="banking law">Banking Law</option>
                <option value="official notarization">Official Notarization</option>
                <option value="consumer law">Consumer Law</option>
                <option value="immigration law">Immigration Law</option>
                <option value="cyber law">Cyber Law</option>
                <option value="legal document preparation">Legal Document Preparation</option>
                <option value="civil law">Civil Law</option>
                <option value="community mediation">Community Mediation</option>
                <option value="insurance law">Insurance Law</option>
                <option value="international arbitration">International Arbitration</option>
                <option value="property law">Property Law</option>
                <option value="commercial mediation">Commercial Mediation</option>
                <option value="cyber crime law">Cyber Crime Law</option>
                <option value="human rights law">Human Rights Law</option>
                <option value="wills and estates">Wills and Estates</option>
                <option value="taxation law">Taxation Law</option>
            </select>
        </div>
    );
};

export default FilterOptions;
