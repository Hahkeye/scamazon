const router = require('express').Router();
const { User, Product } = require('../models');

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


router.get('/', async (req, res) =>{
    try{
        const dbProduct = await Product.findAll();

        const product = dbProduct.map((product) =>
            product.get({plain: true})
        );

        res.render('homepage',{
            product,
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;