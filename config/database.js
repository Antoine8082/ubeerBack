const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ubeer', 'admin', 'jfk', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
