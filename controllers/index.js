const router = require('express').Router();
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const userRoutes = require('./user-route');
const homepage = require('./homepage-routes');
//make sure they are using authication
router.use('/cart',cartRoutes);

router.use('/homepage', homepage);

router.use('/user',userRoutes);

router.use('/', productRoutes);
module.exports = router;