// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="homepage-container">
            <header className="hero">
                <h1>Welcome to University Course Registration System</h1>
                <p>Enhancing the course registration experience for students</p>
                <Link to="/course-journey-map" className="cta-button">Explore the Journey Map</Link>
                <Link to="/login" className="cta-button get-started-button">Get Started</Link>
            </header>

            <section className="info-sections">
                <div className="info-section">
                    <h2>About Us</h2>
                    <p>We understand that the course registration process can be complex and frustrating. Our goal is to simplify this process through a user-friendly interface and insightful journey map.</p>
                </div>
                <div className="info-section">
                    <h2>Course Journey Map</h2>
                    <p>Discover how we have mapped out the entire course registration process to identify pain points and improve your experience.</p>
                    <Link to="/course-journey-map" className="cta-button">View Journey Map</Link>
                </div>
                <div className="info-section">
                    <h2>Give Us Your Feedback</h2>
                    <p>Your feedback is crucial for us to enhance the system. Share your thoughts and help us make the registration process better for everyone.</p>
                    <Link to="/feedback" className="cta-button">Submit Feedback</Link>
                </div>
                <div className="info-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need support, feel free to get in touch with our team.</p>
                    <Link to="/contact" className="cta-button">Contact Support</Link>
                </div>
            </section>

            <section id="get-started">
                <h2>Get Started with Course Registration</h2>
                <p>Ready to begin? Follow the steps below to start your course registration journey.</p>
                <ol>
                    <li>Explore available courses.</li>
                    <li>Select your desired courses.</li>
                    <li>Confirm your registration.</li>
                </ol>
                <Link to="/start-registration" className="cta-button">Start Now</Link>
            </section>

            <footer>
                <p>© 2024 University Course Registration System. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
