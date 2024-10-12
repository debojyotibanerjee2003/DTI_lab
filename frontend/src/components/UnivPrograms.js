import React from 'react';
//import './UnivPrograms.css';

const UnivPrograms = () => {
    return (
        <section id="programs">
            <h2>Featured Programs</h2>
            <div className="program-grid">
                {/* Repeat for each program */}
                <div className="program-card">
                    <h3>Program Name</h3>
                    <p>Brief description of the program.</p>
                    <button>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default UnivPrograms;
