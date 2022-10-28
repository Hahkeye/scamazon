const router = require('express').Router();
const { Op } = require('sequelize');
const { Cart, CartItem, Product } = require('../models');

router.get('/get/:id', async (req, res) => {
    console.log(req.params.id);
    let data = await Cart.findOne({
        // raw: true,
        plain: true,
        where:{
            owner_id:{
                [Op.eq]: req.params.id
            }
        },
        include: [{
            model: CartItem,
            include: [Product]
            
        }]
    })
    console.log(data);
    // res.json()
//   res.render('index');
});
router.post('/add/', async (req,res) =>{
    //maybe check the login
    console.log(req.body);
    let data = CartItem.create(req.params);
    console.log(data);
    console.log();
});


module.exports = router;