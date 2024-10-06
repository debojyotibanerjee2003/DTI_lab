const bcrypt = require('bcrypt');
const { findUserByUsername, registerUser } = require('../models/userModel');

// University registration controller
exports.register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const existingUser = await findUserByUsername(username, 'university');
        if (existingUser) {
            return res.status(400).json({ error: 'University already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await registerUser(username, hashedPassword, req.body.email, 'university'); // Pass email

        res.status(201).json({ message: 'University registered successfully' });
    } catch (error) {
        console.error('Error registering university:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

// University login controller
exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const university = await findUserByUsername(username, 'university');
        if (!university) {
            return res.status(400).json({ error: 'University not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, university.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', university });
    } catch (error) {
        console.error('Error during university login:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};
