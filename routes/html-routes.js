// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  //Show the first page
  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //get the profile
  app.get('/profile/:id', function(req,res){
    res.render("profile", {});
  });

  //Get the listings for a sepcific profile
  app.get('/profile/:id/listings', function(req,res){
    //Need to pass the data for the listings in place of the object

  });

  // Get the Bids for a specific profile
  app.get('/profile/:id/bids', function(req,res){
    //Need to pass the data for the bids in place of the object
    db.Homes.findAll({
      where: {
        Memberid: req.params.id
      }
    }).then(function(dbHomes){
      var hbsObject = {
        listings: dbHomes
      };
      res.render("profileBids", hbsObject);
    });
  });

  //See all messages for this user
  app.get('/profile/:id/messages', function(req,res){
    res.render("profileMessages", {});
  });

  //Create a new member
  app.get('/form', function(req, res) {
    res.render('form', {});
  });

};
