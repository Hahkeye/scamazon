const router = require('express').Router();
const { Op } = require('sequelize');
const { Cart, CartItem, Product } = require('../models');

router.get('/get/:id', async (req, res) => {
    if(req.session.isLoggedIn){
        req.session.touch();
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
        // console.log(data);
        let cartStuff = data.dataValues;
        console.log(cartStuff);
        
        res.render('cart',{cart: cartStuff,sesh:req.session});
    }else{
        res.redirect("/user/login");
    }
});

// router.put('/:id', async (req,res) =>{

// });

router.post("/remove/:id", async(req,res)=>{
    if(req.session.isLoggedIn){
        req.session.touch();
        let data = await CartItem.destroy({
            where:{
                id:{
                    [Op.eq]:req.body.cid
                }
            }
        });
        console.log(data);//redirect to something so the cart get srefresehed
        res.redirect(`/cart/get/${req.session.uID}`);

    }else{
        res.redirect("/user/login");
    }
});

router.post('/add/', async (req,res) =>{
    //maybe check the login
    if(req.session.isLoggedIn){
        req.session.touch();
        req.body['count']=1;
        req.body['cart_id']=req.session.uID;
        // console.log(req.body);
        let data = await CartItem.create(req.body);
        console.log(data);//refresh to something so the cart gets udpate
        res.redirect(`/cart/get/${req.session.uID}`)
    }else{
        res.redirect("/user/login");
    }
   
});


module.exports = router;