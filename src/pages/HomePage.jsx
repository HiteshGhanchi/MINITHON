// src/pages/HomePage.jsx

// import React from 'react';
import Header from '../components/HomePage/Header';
import HeroSection from '../components/HomePage/HeroSection';
import ServiceCards from '../components/HomePage/ServiceCards';
import Testimonials from '../components/HomePage/Testimonials';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ServiceCards />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default HomePage;
