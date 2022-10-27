const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    seller_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    seller_id: 2,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    seller_id: 3,
  },
  {
    product_name: 'Luxury Bottled Air',
    price: 114.99,
    stock: 50,
    seller_id: 4,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    seller_id: 5,
  },
  {
    product_name: 'HeadOn',
    price: 14.99,
    stock: 14,
    seller_id: 6,
  },
  {
    product_name: 'Power Balance Bracelets',
    price: 22.66,
    stock: 14,
    seller_id: 7,
  },
  {
    product_name: 'Shake Weight',
    price: 14.99,
    stock: 14,
    seller_id: 8,
  },
  {
    product_name: 'Slap Chop',
    price: 29.99,
    stock: 14,
    seller_id: 9,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;