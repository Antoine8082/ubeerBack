const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    static associate(models) {
      Beer.belongsTo(models.Brewery, { foreignKey: 'breweryId' });

    }
  }

  Beer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      breweryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Breweries',
          key: 'id'
        }
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('Brune', 'Blonde', 'Rousse', 'Blanche'),
        allowNull: false,
      },

    },
    {
      sequelize,
      modelName: 'Beer',
    }
  );

  return Beer;
};
