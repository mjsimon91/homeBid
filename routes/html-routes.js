// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");
var Sequelize = require('sequelize')
var Op = Sequelize.Op;


// Routes
// =============================================================
module.exports = function(app) {

  //Show the first page
  app.get("/", function(req, res) {
    res.render("home",{});
  });

  //get the profile
  app.get('/my-profile/:id', function(req,res){
    res.render("profile",{memberId: req.params.id});
  });

  //Get the listings for a sepcific profile
  app.get('/my-listings/:id', function(req,res){

    db.Homes.findAll({
      where: {
        MemberId: req.params.id
      }
    }).then(function(dbHomes){
      var hbsObject = {
        listings: dbHomes,
        memberId: req.params.id
      }
      console.log(hbsObject);
      res.render("profileListings", hbsObject);
    })


  });

  // Get the Bids for a specific profile
  app.get('/my-bids/:MemberId', function(req,res){
    db.Bids.findAll({
			where: {
				MemberId: req.params.MemberId
			},
				include: [{model: db.Homes}]
    }).then(function(dbHomes){
      var hbsObject = {
        bids: dbHomes,
        memberId: req.params.MemberId
      }
      res.render("profileBids", hbsObject);
    })

  });

  //See all chatRooms for this user
  app.get('/my-messages/:MemberId', function(req,res){

    var chatRooms =[];

    db.ChatRoom.findAll({
      where: {
        [Op.or]:[{buyerID:req.params.MemberId},  {sellerID: req.params.MemberId}]
      },
      include: [{model: db.Messages}],
      // order: [db.Messages, 'id', 'DESC']
    }).then(function(dbChatRooms){

      //Take the last message that was sent and replace the message array 
      dbChatRooms.forEach(function(dbChatRoom) {
          dbChatRoom.dataValues.Messages = dbChatRoom.dataValues.Messages[dbChatRoom.dataValues.Messages.length - 1];
      })

      var hbsObject = {
        chatRooms: dbChatRooms,
        memberId: req.params.MemberId
        // lastMessage: message
      };

      console.log(hbsObject.chatRooms);
      console.log(' ');
      console.log(' ');
      console.log(hbsObject.chatRooms[0].Messages);

      // for (var i = 0; i < hbsObject.chatRooms.length; i++) {
      //   chatRoomId = hbsObject.chatRooms[i].dataValues.id
      //   chatRooms.push(chatRoomId)
      // }
      // console.log('chatRooms ' + chatRooms);
      res.render("profileMessages", hbsObject);
    });
  });


  //Create a new member
  app.get('/create-listing', function(req, res) {
    res.render('createListing', {});
  });

  // See all active listings
  app.get('/view-listings', function(req, res) {

    db.Homes.findAll({
      where: {
        activeListing: true
      }
    }).then(function(dbHomes) {
      var hbsObject = {
        listings: dbHomes
      }
      res.render('viewListings', hbsObject);
    });
  });
};
