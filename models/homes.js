module.exports = function(sequelize, DataTypes) {
  var Homes = sequelize.define('Homes', {
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },

    member: {
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
    },

    activeListing: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  // // associate with members and bids
  // Homes.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Homes.belongsTo(models.Members, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

//   Homes.associate = function(models) {
//   // Associating Author with Posts
//   // When an Author is deleted, also delete any associated Posts
//   Homes.hasMany(models.Bids, {
//     onDelete: "cascade"
//   });
// };

  return Homes;
}
