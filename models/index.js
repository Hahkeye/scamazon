const Cart = require('./Cart');
const User = require('./User');
const CartItem = require('./CartItem');
const Product = require('./Product');

//relations
/*
User has one cart
Cart has many cartitems
Cartitem belongs to cart
cartitem has one product
product belongs to many cartiems


*/


module.exports = { Cart, User, CartItem, Product};
