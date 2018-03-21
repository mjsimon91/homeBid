module.exports = function(sequelize, DataTypes) {
  var Homes = sequelize.define('Homes', {
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressOne: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressTwo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    activeListing: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    sold: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ViewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    bidCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  // associate with members and bids
Homes.associate = function(models){
  Homes.belongsTo(models.Members, {
    foreignKey:{
      allowNull: false
    }
  });
};

  return Homes;
}
