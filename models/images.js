module.exports = function(sequelize, DataTypes) {
  var Images = sequelize.define('Images', {
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },

    imgUrl: {
      type: DataTypes.STRING,
      isUrl: true
    },

    isHomeImg: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

    isProfileImg: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

    // tags?

  });

  //Associate Images to Members & Homes
  Images.associate = function(models) {
    Images.belongsTo(models.Members);
    Images.belongsTo(models.Homes);
  };

  return Images;

x}
