'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Beers', 'type', {
      type: Sequelize.ENUM('Brune', 'Blonde', 'Rousse', 'Blanche'),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Beers', 'type');
  }
};