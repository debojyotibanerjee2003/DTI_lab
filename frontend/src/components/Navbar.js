// src/components/Navbar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Import as a module

const Navbar = () => {
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(`.${styles.navbar}`);

            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add(styles.scrolled);
                } else {
                    navbar.classList.remove(styles.scrolled);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Link to="/">UniQuest</Link>
            </div>
            <ul className={styles.navbarLinks}>
                <li><Link to="/login" className={location.pathname === '/login' ? styles.active : ''}>Login /       Sign-up</Link></li>
                <li><Link to="/student-dashboard" className={location.pathname === '/student-dashboard' ? styles.active : ''}>Student Dashboard</Link></li>
                <li><Link to="/university-dashboard" className={location.pathname === '/university-dashboard' ? styles.active : ''}>University Dashboard</Link></li>
                <li><Link to="/admin-dashboard" className={location.pathname === '/admin-dashboard' ? styles.active : ''}>Admin Dashboard</Link></li>
                <li><Link to="/search-results" className={location.pathname === '/search-results' ? styles.active : ''}>Search Universities</Link></li>
                <li><Link to="/scholarship-portal" className={location.pathname === '/scholarship-portal' ? styles.active : ''}>Scholarship Portal</Link></li>
                <li><Link to="/university-profile" className={location.pathname === '/university-profile' ? styles.active : ''}>University Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
