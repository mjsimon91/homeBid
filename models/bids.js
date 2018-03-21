module.exports = function(sequelize, DataTypes) {
  var Bids = sequelize.define('Bids', {
    bidAmount: {
      type: DataTypes.DECIMAL,
    },

    cashOffer: {
      type: DataTypes.BOOLEAN,
    },

    bidAmount: {
      type: DataTypes.DECIMAL,
    }

  });

}
