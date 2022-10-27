const { Product } = require('../models');

const productData = [
  {
    name: 'Plain T-Shirt',
    price: 14.99,
    seller_id: 1,
  },
  {
    name: 'Running Sneakers',
    price: 90.0,
    seller_id: 2,
  },
  {
    name: 'Branded Baseball Hat',
    price: 22.99,
    seller_id: 3,
  },
  {
    name: 'Luxury Bottled Air',
    price: 114.99,
    seller_id: 3,
  },
  {
    name: 'Cargo Shorts',
    price: 29.99,
    seller_id: 2,
  },
  {
    name: 'HeadOn',
    price: 14.99,
    seller_id: 1,
  },
  {
    name: 'Power Balance Bracelets',
    price: 22.66,
    seller_id: 1,
  },
  {
    name: 'Shake Weight',
    price: 14.99,
    seller_id: 2,
  },
  {
    name: 'Slap Chop',
    price: 29.99,
    seller_id: 3,
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;