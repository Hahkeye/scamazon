const { Cart } = require('../models');

const cartData = [
  {
    count: 1,
    owner_id: 1,
  },
  {
    count: 3,
    owner_id: 2,
  },
  {
    count: 7,
    owner_id: 3,
  }
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;