//creating a chat room which will be used to associate all messages
module.exports = function(sequelize,DataTypes){
  var ChatRoom = sequelize.define('ChatRoom', {
    buyerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sellerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  //Associate a chat room with many Messages
  ChatRoom.associate = function(models){
    ChatRoom.hasMany(models.Messages);
  };

  return ChatRoom;
};
