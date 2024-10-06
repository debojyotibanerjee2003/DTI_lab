const { studentPool, universityPool, adminPool } = require('../config/db');

// Generic function to find a user by username in the correct database and table
const findUserByUsername = async (username, userType) => {
    let pool;
    let table;

    switch (userType) {
        case 'student':
            pool = studentPool;  // Connect to the correct pool
            table = 'students';  // Correct table name for students
            break;
        case 'university':
            pool = universityPool;  // Connect to the correct pool
            table = 'university_users';  // Correct table name for universities
            break;
        case 'admin':
            pool = adminPool;  // Connect to the correct pool
            table = 'admins';  // Correct table name for admins
            break;
        default:
            throw new Error('Invalid user type');
    }

    const query = `SELECT * FROM ${table} WHERE username = ?`;
    const [rows] = await pool.query(query, [username]);

    return rows.length > 0 ? rows[0] : null;
};

// Function to register a user in the correct database and table
const registerUser = async (username, password, email, userType) => {
    let pool;
    let table;

    switch (userType) {
        case 'student':
            pool = studentPool;  // Connect to the correct pool
            table = 'students';  // Correct table name for students
            break;
        case 'university':
            pool = universityPool;  // Connect to the correct pool
            table = 'university_users';  // Correct table name for universities
            break;
        case 'admin':
            pool = adminPool;  // Connect to the correct pool
            table = 'admins';  // Correct table name for admins
            break;
        default:
            throw new Error('Invalid user type');
    }

    // Check if the user already exists
    const existingUser = await findUserByUsername(username, userType);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const query = `INSERT INTO ${table} (username, password, email) VALUES (?, ?, ?)`;
    await pool.query(query, [username, password, email]);

    return { message: `${userType} registered successfully!` };
};

// Generic function to update user information (e.g., password)
const updateUserPassword = async (userId, newPassword, userType) => {
    let pool;
    let table;

    switch (userType) {
        case 'student':
            pool = studentPool;  // Connect to the correct pool
            table = 'students';  // Correct table name for students
            break;
        case 'university':
            pool = universityPool;  // Connect to the correct pool
            table = 'university_users';  // Correct table name for universities
            break;
        case 'admin':
            pool = adminPool;  // Connect to the correct pool
            table = 'admins';  // Correct table name for admins
            break;
        default:
            throw new Error('Invalid user type');
    }

    const query = `UPDATE ${table} SET password = ? WHERE id = ?`;
    await pool.query(query, [newPassword, userId]);

    return { message: 'Password updated successfully!' };
};

module.exports = {
    findUserByUsername,
    registerUser,
    updateUserPassword
};
