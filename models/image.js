const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(models.Beer, { as: 'beerImage', foreignKey: 'beerId' });
      Image.belongsTo(models.Brewery, { as: 'breweryImage', foreignKey: 'breweryId' });
    }
  }

  Image.init(
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageData: {
        type: DataTypes.BLOB, //LONGTEXT
        allowNull: false,
      },
      beerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Beers',
          key: 'id',
        },
      },
      breweryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Breweries',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );

  return Image;
};
