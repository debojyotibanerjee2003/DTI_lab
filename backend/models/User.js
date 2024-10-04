const connection = require('../config/db');

const User = function(user) {
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;
