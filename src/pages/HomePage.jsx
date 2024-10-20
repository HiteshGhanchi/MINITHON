// src/pages/HomePage.jsx

// import React from 'react';
import Header from '../components/HomePage/Header';
import HeroSection from '../components/HomePage/HeroSection';
import ServiceCards from '../components/HomePage/ServiceCards';
import Testimonials from '../components/HomePage/Testimonials';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {

    const services = 
        { id: 1, name: "Legal Consultation", description: "Get professional legal advice.", hourlyRate: 1000, rating: 4.5 };
       
        // Add more services as needed
    
    return (
        <div>
            <Header />
            <HeroSection />
            {/* <ServiceCards service={services}/> */}
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
