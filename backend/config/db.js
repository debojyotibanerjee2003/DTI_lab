// backend/config/db.js
require('dotenv').config();
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL Database:', err.message);
        return;
    }
    console.log('Connected to MySQL Database!');
    connection.release(); // Release the connection back to the pool
});

module.exports = pool.promise();
