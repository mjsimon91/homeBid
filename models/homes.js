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
      allowNull: true
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longitude:{
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    activeListing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    //Has this home been sold where true = yes and false = no
    sold: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    bidCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  // associate with members
   Homes.associate = function(models){
     Homes.belongsTo(models.Members);
     Homes.hasMany(models.Bids, {
     });
   };

  return Homes;
};
