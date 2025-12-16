// src/pages/LandingPage.tsx
import React from 'react';
// Assuming you will create a separate CSS file for the landing page styles
import '../styles/LandingPage.css'; 
import { Link } from 'react-router-dom'; // Import Link for navigation

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            {/* --- Header/Navigation --- */}
            <header className="main-header">
                <h1 className="header-logo">Koji</h1>
                <nav className="header-nav">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About us</a>
                </nav>
                {/* Link to the login/signup page */}
                <Link to="/login" className="signup-free-button">
                    Sign up for Free
                </Link>
            </header>

            {/* --- Hero Section --- */}
            <section className="hero-section">
                <div className="hero-content">
                    <h2 className="hero-headline">
                        Turn your team meetings so breezy with <span className="logo-text">Koji</span>
                    </h2>
                    <p className="hero-subtitle">
                        Koji is a simple platform to make your team simple to manage
                    </p>
                    {/* Call to Action Button */}
                    <Link to="/login" className="cta-button">
                        Try Koji for free – Sign Now
                    </Link>
                </div>
            </section>

            {/* Placeholder for the "More than just a platform" section */}
            <section className="difference-section">
                <h3 className="section-title">More than just a platform</h3>
                <h4 className="section-subtitle">The Koji Difference</h4>
            </section>
        </div>
    );
};

export default LandingPage;