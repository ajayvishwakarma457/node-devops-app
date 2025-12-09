const router = require('express').Router();

router.use('/users', require('./user.routes'));
router.use('/products', require('./product.routes'));
router.use('/orders', require('./order.routes'));

module.exports = router;
