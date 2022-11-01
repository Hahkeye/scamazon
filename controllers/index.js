const router = require('express').Router();
const productRoutes = require('./product-routes');
const cartRoutes = require('./cart-routes');
const userRoutes = require('./user-route');
const homepage = require('./homepage-routes');
//make sure they are using authication

// router.get('*', async (req,res) =>{
//     console.log("REEEEEE");
//     res.redirect("/homepage/");
// });
router.use('/cart',cartRoutes);

router.use('/', homepage);

router.use('/user',userRoutes);

router.use('/product', productRoutes);


module.exports = router;