const { CartItem } = require('../models');

const cartItem = [
  {
    count: 1,
    product_id: 1,
    cart_id: 1,
  },
  {
    count: 2,
    product_id: 2,
    cart_id: 1,
  },
  {
    count: 6,
    product_id: 6,
    cart_id: 1,
  },
  {
    count: 19,
    product_id: 3,
    cart_id: 1,
  },
  {
    count: 1,
    product_id: 1,
    cart_id: 1,
  },
  {
    count: 2,
    product_id: 2,
    cart_id: 2,
  },
  {
    count: 6,
    product_id: 6,
    cart_id: 2,
  },
  {
    count: 19,
    product_id: 3,
    cart_id: 2,
  }
 
];

const seedCartItem = () => Cart.bulkCreate(cartItem);

module.exports = seedCartItem;