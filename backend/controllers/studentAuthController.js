const bcrypt = require('bcrypt');
const { findUserByUsername, registerUser } = require('../models/userModel');

// Student registration controller
exports.register = async (req, res) => {
    const { username, password, email } = req.body; // Include email in the destructuring

    if (!username || !password || !email) { // Check for email as well
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const existingUser = await findUserByUsername(username, 'student');
        if (existingUser) {
            return res.status(400).json({ error: 'Student already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await registerUser(username, hashedPassword, email, 'student'); // Include email here

        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        console.error('Error registering student:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

// Student login controller
exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const student = await findUserByUsername(username, 'student');
        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        console.error('Error during student login:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};
