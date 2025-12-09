const users = require('../data/users.json');

exports.getAllUsers = (req, res) => {
  res.json(users);
};
