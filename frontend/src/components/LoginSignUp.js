// src/components/LoginSignUp.js
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'; // Import query-string for parsing URL params
import styles from '../styles/LoginSignUp.module.css'; // Import CSS module

function LoginSignUp() {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('student');

    useEffect(() => {
        // Parse the query params and update the userType if present
        const { userType: queryUserType } = queryString.parse(location.search);
        if (queryUserType) {
            setUserType(queryUserType);
            setIsLogin(true); // Ensure it shows login after registration redirect
        }
    }, [location.search]);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    return (
        <div className={styles.loginSignupContainer}>
            <h2>{isLogin ? 'Login' : 'Sign-Up'}</h2>
            
            <div className={styles.userTypeSelection}>
                <label htmlFor="userType">I am a:</label><br></br><br></br>
                <select id="userType" value={userType} onChange={handleUserTypeChange}>
                    <option value="student">Student</option>
                    <option value="university">University</option>
                    <option value="admin">Admin</option>
                </select>
            </div><br></br>

            {isLogin ? <Login userType={userType} /> : <Register userType={userType} />}

            <div className={styles.toggleContainer}><br></br>
                <button onClick={toggleForm} className={styles.toggleButton}>
                    {isLogin ? 'Switch to Sign-Up' : 'Switch to Login'}
                </button>
            </div>
        </div>
    );
}

export default LoginSignUp;
