// src/pages/UserProfilePage.jsx

import  { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfilePage/UserProfile';
import AppointmentHistory from '../components/UserProfilePage/AppointmentHistory';

const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Retrieve the token from local storage
        const token = localStorage.getItem('authToken');

        // Fetch user data from your file or API
        const fetchUserData = async () => {
            if (token) {
                // Replace this URL with your actual endpoint
                const response = await fetch('/path/to/your/users.json');
                const data = await response.json();
                
                // Assuming your user data is structured properly
                const currentUser = data.find((user) => user.token === token);
                setUser(currentUser);
                
                // Fetch appointments if needed
                const appointmentsResponse = await fetch('/path/to/your/appointments.json');
                const appointmentsData = await appointmentsResponse.json();
                setAppointments(appointmentsData);
            }
        };

        fetchUserData();
    }, []);

    if (!user) {
        return <p>Loading user data...</p>; // Show loading state while fetching
    }

    return (
        <div>
            <UserProfile user={user} />
            <AppointmentHistory appointments={appointments} />
        </div>
    );
};

export default UserProfilePage;
