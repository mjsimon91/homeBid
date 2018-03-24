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

  // Create a route to post a new messages
  // app.post("/api/homes", function(req, res) {
  //
  //   console.log('POST:', req.body);
  //
  //   db.Homes.create(req.body).then(function(dbHomes) {
  //     res.json(dbHomes);
  //   });
  // });

  app.post('/api/chatRoom/', function(req,res){
    db.Messages.create(req.body).then(function(dbMessages){
      res.json(dbMessages);
    });
  });
};
