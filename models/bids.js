module.exports = function(sequelize, DataTypes) {

  var Bids = sequelize.define('Bids', {
    bidAmount: {
      type: DataTypes.DECIMAL
    },

    cashOffer: {
      type: DataTypes.BOOLEAN
    },

    asIs: {
      type: DataTypes.BOOLEAN
    },

    winningBid: {
      type: DataTypes.BOOLEAN
    }
  });

  return Bids;

}
