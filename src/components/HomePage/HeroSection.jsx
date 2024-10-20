// src/components/HomePage/HeroSection.jsx

const HeroSection = () => {
    return (
        <div className="bg-blue-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to the Legal Services Marketplace
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Your one-stop solution for legal assistance.
                </p>
                <button className="bg-yellow-400 text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition duration-200">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
