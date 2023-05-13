'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Beers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: Sequelize.DataTypes.STRING,
            description: Sequelize.DataTypes.TEXT,
            breweryId: Sequelize.DataTypes.INTEGER,
            price: Sequelize.DataTypes.FLOAT,
            type: Sequelize.ENUM('Brune', 'Blonde', 'Rousse', 'Blanche'),
            imageUrl: Sequelize.DataTypes.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Beers');
    }
};