const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    static associate(models) {
      Beer.belongsTo(models.Brewery, { foreignKey: 'breweryId' });
      Beer.hasOne(models.Image, { as: 'beerImage', foreignKey: 'beerId' });
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
