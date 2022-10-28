const router = require('express').Router();
const { Op } = require('sequelize');
const { Cart, CartItem, Product } = require('../models');

router.get('/get/:id', async (req, res) => {
    console.log(req.params.id);
    let data = await CartItem.findAll({
        raw: true,
        include: [Product,Cart],
        where: {
           cart_id: {
            [Op.eq]: req.params.id
           } 

        }
    });
    console.log(data);
    // res.json()
//   res.render('index');
});
router.post('/add/:id', async (req,res) =>{
    console.log();
});


module.exports = router;