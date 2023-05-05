const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Brewery extends Model {}

Brewery.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Brewery'
});

module.exports = Brewery;
