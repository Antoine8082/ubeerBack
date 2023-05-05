const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Beer extends Model {}

Beer.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Beer'
});

module.exports = Beer;
