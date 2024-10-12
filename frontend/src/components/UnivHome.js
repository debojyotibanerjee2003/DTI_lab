import React from 'react';
//import './UnivHome.css';

const UnivHome = () => {
    return (
        <section className="hero">
            <h1>Welcome to [University Name]</h1>
            <p>Explore our programs and join our community.</p>
            <button onClick={() => window.scrollTo(0, document.getElementById('programs').offsetTop)}>Explore Programs</button>
        </section>
    );
};

export default UnivHome;
