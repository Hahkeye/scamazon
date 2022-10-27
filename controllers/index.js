const router = require('express').Router();
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const userRoutes = require('./user-route');
//make sure they are using authication
router.use('/cart',cartRoutes);

router.use('/user',userRoutes);

router.use('/', productRoutes);
module.exports = router;