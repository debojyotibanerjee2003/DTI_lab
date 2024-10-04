// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Assuming this is your db.js file
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(bodyParser.json());

// Endpoint for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, password])
        .then(() => {
            res.status(201).json({ message: 'User registered successfully!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Database error' });
        });
});

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
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
            res.status(500).json({ error: 'Database error' });
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});