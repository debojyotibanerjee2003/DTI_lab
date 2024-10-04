const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Example route: User registration
router.post('/register', userController.registerUser);

module.exports = router;
