const router = require('express').Router();
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');

router.use('/cart',cartRoutes);

router.use('/', productRoutes);
module.exports = router;