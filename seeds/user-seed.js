const { User } = require('../models');

const userPeople = [
  {
    user_name: "",
    user_last_name: "",
    cart_id: 1,
  },
  {
    user_name: "",
    user_last_name: "",
    cart_id: 1,
  },
  {
    user_name: "",
    user_last_name: "",
    cart_id: 1,
  }
];

const userSeeds = () => Cart.bulkCreate(userPeople);

module.exports = userSeeds;