const Cart = require('./Cart');
const User = require('./User');
const CartItem = require('./CartItem');
const Product = require('./Product');

User.hasOne(Cart, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
    foreignKey: 'user_id'
});

Cart.hasMany(CartItem, {
    foreignKey: 'cart_id',
    onDelete: 'CASCADE',
});

CartItem.belongsTo(Cart, {
    foreignKey: 'cart_id',
});

CartItem.hasOne(Product, {
    foreignKey: 'cartitem_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(CartItem, {
    foreignKey: 'cartitem_id',
});

module.exports = { Cart, User, CartItem, Product};
