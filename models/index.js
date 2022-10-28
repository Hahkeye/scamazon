const Cart = require('./Cart');
const User = require('./User');
const CartItem = require('./CartItem');
const Product = require('./Product');

User.hasOne(Cart, {
    foreignKey: 'owner_id',
    // onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
    foreignKey: 'owner_id'
});

Cart.hasMany(CartItem, {
    foreignKey: 'cart_id',
    onDelete: 'SET NULL',
});
Product.hasMany(CartItem, {
    foreignKey:'product_id',
    // onDelete: 'CASECADE'
});
CartItem.hasOne(Product,{
    foreignKey:'product_id',
});
CartItem.belongsTo(Cart, {
    foreignKey: 'cart_id',
});

module.exports = { Cart, User, CartItem, Product};
