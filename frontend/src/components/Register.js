import React, { useState } from 'react';

function Register({ userType }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Add email state
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5001/api/${userType}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }), // Add email to the body
        });

        const data = await response.json();
        if (response.ok) {
            setMessage('Registration successful! You can now log in.');
        } else {
            setMessage(data.message || 'Registration failed. Please try again.');
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
                <input
                    type="email" // Use email input type
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Handle email change
                    placeholder="Email"
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
