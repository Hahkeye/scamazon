const router = require('express').Router();
const { Op } = require('sequelize');
const { Cart, CartItem, Product } = require('../models');

router.get('/get/:id', async (req, res) => {
    console.log(req.params.id);
    if(req.session.isLoggedIn){
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
    }else{
        res.redirect("/user/login");
    }
});

router.delete("/remove/:id", async(req,res)=>{
    if(req.session.isLoggedIn){
        let data = await CartItem.destroy(req.params.id);
        console.log(data);//redirect to something so the cart get srefresehed
    }else{
        res.redirect("/user/login");
    }
});

router.post('/add/', async (req,res) =>{
    //maybe check the login
    if(req.session.isLoggedIn){
        console.log(req.body);
        let data = CartItem.create(req.params);
        console.log(data);//refresh to something so the cart gets udpate
    }else{
        res.redirect("/user/login");
    }
   
});


module.exports = router;