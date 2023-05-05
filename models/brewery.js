const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    static associate(models) {
      Brewery.hasMany(models.Beer, { foreignKey: 'breweryId' });
    }
  }

  Brewery.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Brewery',
    }
  );

  return Brewery;
};
