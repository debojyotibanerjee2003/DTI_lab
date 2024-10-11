import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ userType }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5001/api/${userType}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Login successful! Redirecting...');
            // Redirect to the appropriate dashboard
            if (userType === 'admin') {
                navigate('/admin-dashboard');
            } else if (userType === 'university') {
                navigate('/university-dashboard');
            } else if (userType === 'student') {
                navigate('/student-dashboard');
            }
        } else {
            setMessage(data.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? 'text' : 'password'} // Toggle between text and password types
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{ paddingRight: '40px' }} // Space for the eye icon
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                        }}
                    >
                        {showPassword ? 'Hide' : 'Show'} {/* Eye icon */}
                    </span>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
//'🙈' : '👁️'