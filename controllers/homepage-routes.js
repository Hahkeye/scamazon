const router = require('express').Router();
const { User, Product } = require('../models');

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }



router.get('/', async (req, res) =>{
    // console.log(req.session.isLoggedIn);
    // req.session.touch();
    try{
        const dbProduct2 = await Product.findAll();
        const dbProduct = await Product.findAll({ limit: 3 });

        const product = dbProduct.map((product) =>
            product.get({plain: true})
        );
        const product2 = dbProduct2.map((product) =>
            product.get({plain: true})
        );
        // console.log(product);
        res.render('homepage',{
            css:'homepageStyle.css',
            product: product, sesh: req.session
        ,product2: product2});
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/products', async (req, res) =>{
    // console.log(req.session.isLoggedIn);
    req.session.touch();
    try{
        const dbProduct = await Product.findAll({});

        const product = dbProduct.map((product) =>
            product.get({plain: true})
        );

        res.render('allproducts',{
            css:'allproducts.css',
            product
        ,sesh: req.session});
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;