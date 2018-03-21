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
    // Sell your home in as is condition
    asIs: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    // Was this the winning bid
    winningBid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  //A bid belongs to a Home
  Bids.associate = function(models){
    Bids.belongsTo(models.Homes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // A bid belongs to a Member as well
  Bids.associate = function(models){
    Bids.belongsTo(models.Members, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bids;
};
