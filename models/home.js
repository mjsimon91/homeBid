module.exports = function(sequelize, DataTypes) {
  var Home = sequelize.define('Home', {

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

    img: {
      type: DataTypes.STRING,
      validate: {isUrl: true}
    }
  });
  // associate with seller and bid

  return Home;
}
