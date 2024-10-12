// src/components/Navbar.js
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">UniQuest</Link> {/* You can replace this with your actual logo */}
            </div>
            <ul className="navbar-links">
                <li><Link to="/login">Login/Sign-up</Link></li>
                <li><Link to="/student-dashboard">Student Dashboard</Link></li>
                <li><Link to="/university-dashboard">University Dashboard</Link></li>
                <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
                <li><Link to="/search-results">Search Universities</Link></li>
                <li><Link to="/scholarship-portal">Scholarship Portal</Link></li>
                <li><Link to="/university-profile">University Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
