const User = require('../models/User');
// Example: User registration logic
exports.registerUser = (req, res) => {
  const newUser = new User(req.body);
  // Logic for saving the new user to the database
};
