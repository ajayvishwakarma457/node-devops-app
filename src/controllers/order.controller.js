const orders = require('../data/orders.json');

exports.getAllOrders = (req, res) => {
  res.json(orders);
};


