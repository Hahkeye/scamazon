const router = require('express').Router();
const { Op } = require('sequelize');
// const { beforeDestroy } = require('../config/connect');
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try{
    const allProducts = await Product.findAll({});
    const collectedProducts = allProducts.map(collectedProducts=>collectedProducts.get({ plain: true }));
    res.render('index',{ collectedProducts });
  }catch(err){
    res.status(500).json(err);
  }
});


router.post('/getName', async (req, res) => {
  console.log(req.body)
  try{
    const singProduct = await Product.findAll({
      raw: true,
      where: {
        name: {
          [Op.substring]: `${req.body.searchBar}`
        }
      }
    });
    console.log(singProduct)
    // const product = singProduct.get({ plain: true });
    res.render('product', { product: singProduct });
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/get/:id', async (req, res) => {
  try{
    const singProduct = await Product.findByPk(req.params.id,{raw: true});

    console.log(singProduct);
    res.render('product', { product: [singProduct],session: req.session });
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req,res)=>{
  try{
     const newProduct= await Product.create(req.body)
    res.status(200).json(newProduct)
  }catch(err){
    res.status(500).json(err);
  }
})

router.put('/:id', async (req,res)=>{
  try{
    const updateProduct=await Product.update(req.body,{
      where:{
        id: req.params.id,
      }
    })
    res.status(200).json(updateProduct)
  } catch(err){
    res.status(500).json(err);
  }
})

router.delete('/:id', async(req,res)=>{
  try{
    const delProduct=await Product.destroy({
      where:{
        id: req.params.id,
      }
    })
    res.status(200).json(delProduct)
  } catch(err){
    res.status(500).json(err);
  }
})



module.exports = router;