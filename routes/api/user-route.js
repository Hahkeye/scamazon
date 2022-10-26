const router = require('express').Router();
const { User } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll({
      //include: [{model: Product}] model??
    })
    res.status(200).json(allUsers)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const allUserId = await User.findByPk(req.params.id, {
      //include: [{model: Product}]
    })
    res.status(200).json(allUserId)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      user_name: req.body.user_name
    })
    res.status(200).json(newUser)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateUser = await User.update(req.body, {
      where: {id: req.params.id}
    });
    res.status(200).json(updateUser)
  }
  catch (error) {
    res.status(400).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {id: req.params.id}
    })
    res.status(200).json(deleteUser)
  }
  catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;