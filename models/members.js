module.exports = function(sequelize, DataTypes){

  //Name the table (model)
  var Members = sequelize.define("Members", {
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1,60]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
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

  // Associate this with the Homes model
  Members.associate = function(models){
    Members.hasMany(models.Homes, {
      onDelete: "cascade"
    });
    Members.hasMany(models.Bids)
  };

  return Members;
};
