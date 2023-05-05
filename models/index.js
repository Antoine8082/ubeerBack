'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.values(db)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(db));

db.Beer.belongsTo(db.Brewery, { foreignKey: 'breweryId', as: 'brewery' });
db.Beer.hasMany(db.Image, { foreignKey: 'beerId', as: 'images' });

db.Brewery.hasMany(db.Beer, { foreignKey: 'breweryId', as: 'beers' });
db.Brewery.hasMany(db.Image, { foreignKey: 'breweryId', as: 'images' });

db.Image.belongsTo(db.Beer, { foreignKey: 'beerId', as: 'beer' });
db.Image.belongsTo(db.Brewery, { foreignKey: 'breweryId', as: 'brewery' });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
