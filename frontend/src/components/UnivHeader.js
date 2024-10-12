import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UnivHeader.css'; // Optional for custom styling

const UnivHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <img src="/logo.png" alt="University Logo" className="logo" />
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/programs">Programs</Link>
                    <Link to="/admissions">Admissions</Link>
                    <Link to="/research">Research</Link>
                    <Link to="/campus-life">Campus Life</Link>
                    <Link to="/scholarship-portal">Scholarship</Link>
                    <Link to="/placement">Placement</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default UnivHeader;
