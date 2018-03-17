module.exports = function(sequelize, DataTypes) {
  var Homes = sequelize.define('Homes', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 1.00
    },

    seller: {
      type: DataTypes.STRING,
      // allowNull: false <- eventually
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    bidAmount: {
      type: DataTypes.DECIMAL,
      defaultValue: 1.00
    },

    bidCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    imgUrl: {
      type: DataTypes.STRING
      // validate: {isUrl: true}
    }
  });

  // associate with members and bids

  return Homes;
}
