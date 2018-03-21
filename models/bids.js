// This file will iclude the model for all Bids which are associated with a Member and a home
module.exports = function(sequelize, DataTypes){
  var Bids = sequelize.define('Bids', {
    bidAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    cashOffer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    asIs: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    winningBid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  //Associate Bids to Members
  Bids.associate = function(models){
    Bids.belongsTo(models.Members);
    Bids.belongsTo(models.Homes);
  };

  return Bids;
};
