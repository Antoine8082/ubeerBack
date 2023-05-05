const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Image extends Model {}

Image.init({
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  altText: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Image'
});

module.exports = Image;
