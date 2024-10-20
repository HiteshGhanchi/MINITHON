// src/pages/ProviderProfilePage.jsx

import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the provider ID from the URL
import ProviderProfile from '../components/ProvideProfilePage/ProviderProfile';

const ProviderProfilePage = () => {
    const { id } = useParams(); // Get the provider ID from the URL
    const [provider, setProvider] = useState(null); // State to store the fetched provider

    useEffect(() => {
        const fetchProviderData = async () => {
            try {
                const response = await fetch('/providers.json'); // Fetch data from public/providers.json
                const data = await response.json();
                const foundProvider = data.find((p) => p.id === parseInt(id)); // Find provider by ID
                setProvider(foundProvider);
            } catch (error) {
                console.error('Error fetching provider data:', error);
            }
        };

        fetchProviderData();
    }, [id]); // Trigger the effect when the ID changes

    if (!provider) {
        return <p>Loading provider details...</p>; // Optional loading state
    }

    return (
        <div>
            <ProviderProfile provider={provider} /> {/* Pass provider data as a prop */}
            {/* <ReviewSection provider={provider} /> Uncomment to display reviews */}
        </div>
    );
};

export default ProviderProfilePage;
