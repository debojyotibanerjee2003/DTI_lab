// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">UniQuest</Link> {/* You can replace this with your actual logo */}
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login/Sign-up</Link></li>
                <li><Link to="/student-dashboard">Student Dashboard</Link></li>
                <li><Link to="/university-dashboard">University Dashboard</Link></li>
                <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
                <li><Link to="/search-results">Search Universities</Link></li>
                <li><Link to="/scholarship-portal">Scholarship Portal</Link></li>
                <li><Link to="/university-profile">Virtual Campus Tour</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
