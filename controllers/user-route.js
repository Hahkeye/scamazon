const router = require('express').Router();
const { Op } = require('sequelize');
const { User } = require('../models');


// CREATE new user

router.get('/login', async (req,res)=>{
  // console.log("asdasd");
  res.render("login");
});

router.post('/create', async (req,res)=>{
  console.log(req.body);
  let data = await  User.create(req.body);
  console.log(data);
  req.session.save( () =>{
    req.session.isLoggedIn = true;
    req.session.uID = data.dataValues['id'];
    res.redirect("/homepage");
  });
});

//Login


router.post('/login', async (req, res) => {
  let data = await User.findOne({
    where:{
      email:{
        [Op.eq]:req.body['email-login']
      }
    }
  })
  if(data){
    // console.log(data);
    if(data.checkPassword(req.body['password-login'])){
      // console.log("good user name and good password");
      // console.log(req.session); 
      req.session.save( () =>{
        req.session.isLoggedIn = true;
        req.session.uID = data.dataValues['id'];
        res.redirect("/homepage");
      });
    }
  }else{
    res.redirect('/user/login');
  }
});


router.get('/logout', async(req,res) =>{
  if(req.session.isLoggedIn){
    req.session.save( () =>{
      req.session.isLoggedIn = false;
    });
  }
  res.render('login')
});

module.exports = router;