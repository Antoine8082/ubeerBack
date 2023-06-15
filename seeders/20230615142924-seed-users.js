'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'utilisateur1',
        email: 'utilisateur1@example.com',
        password: 'pass1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'utilisateur2',
        email: 'utilisateur2@example.com',
        password: 'pass2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'utilisateur3',
        email: 'utilisateur3@example.com',
        password: 'pass3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
