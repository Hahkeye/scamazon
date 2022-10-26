const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connect.js');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          
          user_name: {
            type: DataTypes.string,
            allowNull: false
          },

          user_last_name: {
            type: DataTypes.string,
            allowNull: false
          },

          Date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
          }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',

    }
)

module.exports = User;