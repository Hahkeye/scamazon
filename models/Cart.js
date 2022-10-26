const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Cart extends Model {}

Cart.init(
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
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Cart',
  }
);

module.exports = Cart;
