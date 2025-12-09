const products = require('../data/products.json');

exports.getAllProducts = (req, res) => {
  res.json(products);
};
