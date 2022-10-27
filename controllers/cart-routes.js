const router = require('express').Router();
const { User } = require('../models');

router.get('/get/:id', async (req, res) => {
    console.log(req.params.id);
    if(User.findByPk(req.params.id)){
        
    }
    // res.json()
//   res.render('index');
});
router.post('/add/:id', async (req,res) =>{
    console.log();
});

module.exports = router;