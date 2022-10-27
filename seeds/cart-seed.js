const { Cart } = require('../models');

const cartData = [
  {
    count: 1,
    owner_id: 1,
  },
  {
    count: 3,
    owner_id: 2,
  }
 
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;