// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Importing routes
const studentAuthRoutes = require('./routes/studentAuthRoutes');
const universityAuthRoutes = require('./routes/universityAuthRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');

// Import the database connection
const db = require('./config/db'); // Assuming this is your db.js file

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Register/Login for generic user (this can be for additional roles or temporary users)
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, password])
        .then(() => {
            res.status(201).json({ message: 'User registered successfully!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Database error during registration' });
        });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    db.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password])
        .then(([rows]) => {
            if (rows.length > 0) {
                res.status(200).json({ message: 'Login successful!' });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Database error during login' });
        });
});

// Separate routes for student, university, and admin authentication
app.use('/api/student/auth', studentAuthRoutes);
app.use('/api/university/auth', universityAuthRoutes);
app.use('/api/admin/auth', adminAuthRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
