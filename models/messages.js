//Creating the table for messages. A single message will be pushed to this table and then associated with a chat room
module.exports = function(sequelize, DataTypes){
  var Messages = sequelize.define('Messages', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  // Associate messages with a chat room
  Messages.associate = function(models){
    Messages.belongsTo(models.ChatRoom);
    Messages.belongsTo(models.Members);
  };
  return Messages;
};
