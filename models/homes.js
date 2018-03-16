module.exports = function(sequelize, DataTypes) {
  var Homes = sequelize.define('Homes', {

    seller: {
      type: DataTypes.STRING
    },

    address: {
      type: DataTypes.STRING
    },

    description: {
      type: DataTypes.TEXT
    },

    bidAmount: {
      type: DataTypes.DECIMAL
    },

    bidCount: {
      type: DataTypes.INTEGER
    },

    viewCount: {
      type: DataTypes.INTEGER
    },

    imgUrl: {
      type: DataTypes.STRING,
      validate: {isUrl: true}
    }
  });

  // associate with members and bids

  return Homes;
}
