const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class CartItem extends Model {}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'Product',
            key: 'id',
        }
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cart',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CartItem',
  }
);

module.exports = CartItem;
