const bcrypt = require('bcrypt');
const { findUserByUsername, registerUser } = require('../models/userModel');

// Admin registration controller
exports.register = async (req, res) => {
    const { username, password, email } = req.body; // Extract email

    // Validate required fields
    if (!username || !password || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const existingUser = await findUserByUsername(username, 'admin');
        if (existingUser) {
            return res.status(400).json({ error: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await registerUser(username, hashedPassword, email, 'admin'); // Pass email

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error('Error registering admin:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

// Admin login controller
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const admin = await findUserByUsername(username, 'admin');
        if (!admin) {
            return res.status(400).json({ error: 'Admin not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Send back a relevant response without sensitive data
        res.status(200).json({ message: 'Login successful', adminId: admin.id }); // Return admin ID instead of full admin object
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};
