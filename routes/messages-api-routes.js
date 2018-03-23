var db = require('../models')
var Sequelize = require('sequelize')
var Op = Sequelize.Op;

module.exports = function(app){

  //Get all chatrooms that a member is a part of
  app.get('/api/chatrooms/:MemberId', function(req,res){
    db.ChatRoom.findAll({
      where:{
        [Op.or]:[{buyerID:req.params.MemberId},  {sellerID: req.params.MemberId}]
      },
      include: [{model: db.Messages}]
    }).then(function(dbChatroom){
      res.json(dbChatroom);
    });
  });
};
