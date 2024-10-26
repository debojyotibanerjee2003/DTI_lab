// src/Documentation.js
import React from 'react';
import styles from '../styles/Documentation.module.css';

const Documentation = () => {
    return (
        <div className={styles.documentationContainer}>
            <h2 className={styles.title}>Documentation</h2>
            <p className={styles.description}>
                Welcome to the University Admission Portal documentation. Here you will find all the information
                you need to successfully navigate the admission process.
            </p>
            <h3 className={styles.sectionTitle}>Sections</h3>
            <ul className={styles.list}>
                <li>Overview of Admissions</li>
                <li>Application Submission Process</li>
                <li>Tracking Your Application</li>
                <li>Frequently Asked Questions</li>
                <li>Contact Support</li>
            </ul>
        </div>
    );
};

export default Documentation;
