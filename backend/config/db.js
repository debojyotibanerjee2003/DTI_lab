// backend/config/db.js
require('dotenv').config();
const mysql = require('mysql2');

// Create connection pools for each user type
const studentPool = mysql.createPool({
    host: process.env.STUDENT_DB_HOST,
    user: process.env.STUDENT_DB_USER,
    password: process.env.STUDENT_DB_PASS,
    database: process.env.STUDENT_DB_NAME
});

const universityPool = mysql.createPool({
    host: process.env.UNIVERSITY_DB_HOST,
    user: process.env.UNIVERSITY_DB_USER,
    password: process.env.UNIVERSITY_DB_PASS,
    database: process.env.UNIVERSITY_DB_NAME
});

const adminPool = mysql.createPool({
    host: process.env.ADMIN_DB_HOST,
    user: process.env.ADMIN_DB_USER,
    password: process.env.ADMIN_DB_PASS,
    database: process.env.ADMIN_DB_NAME
});

// Test connections for each pool
const testConnection = (pool, dbName) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error(`Error connecting to ${dbName} Database:`, err.message);
            return;
        }
        console.log(`Connected to ${dbName} Database!`);
        connection.release(); // Release the connection back to the pool
    });
};

// Test each connection pool
testConnection(studentPool, 'Student');
testConnection(universityPool, 'University');
testConnection(adminPool, 'Admin');

// Export the pools as promises
module.exports = {
    studentPool: studentPool.promise(),
    universityPool: universityPool.promise(),
    adminPool: adminPool.promise()
};
