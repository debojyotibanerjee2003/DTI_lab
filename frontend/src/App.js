// src/App.js
import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="App">
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            {isLogin ? <Login /> : <Register />}
            <button onClick={toggleForm}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
}

export default App;
