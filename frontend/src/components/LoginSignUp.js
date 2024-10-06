// src/components/LoginSignUp.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../styles/LoginSignUp.css';

function LoginSignUp() {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserType] = useState('student');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    return (
        <div className="login-signup-container">
            <h2>{isLogin ? 'Login' : 'Sign-Up'}</h2>
            
            <div className="user-type-selection">
                <label htmlFor="userType">I am a:</label>
                <select id="userType" value={userType} onChange={handleUserTypeChange}>
                    <option value="student">Student</option>
                    <option value="university">University</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            {isLogin ? <Login userType={userType} /> : <Register userType={userType} />}

            <div className="toggle-container">
                <button onClick={toggleForm} className="toggle-button">
                    {isLogin ? 'Switch to Sign-Up' : 'Switch to Login'}
                </button>
            </div>
        </div>
    );
}

export default LoginSignUp;
