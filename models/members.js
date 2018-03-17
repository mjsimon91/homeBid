module.exports = function(sequelize, DataTypes){

  //Name the table (model)
  var Members = sequelize.define("Members", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,60]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  //Associate this with the Homes model
  // Members.associate = function(models){
  //   Members.hasMany(models.Home, {
  //     onDelete: "cascade"
  //   });
  // };

  return Members
};
