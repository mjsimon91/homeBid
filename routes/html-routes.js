// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  //Show the first page
  app.get("/", function(req, res) {
    res.render("home",{});
  });

  //get the profile
  app.get('/my-profile/:id', function(req,res){
    res.render("profile",{});
  });

  //Get the listings for a sepcific profile
  app.get('/my-listings/:id', function(req,res){
    res.render("profileListings", {});
  });

  // Get the Bids for a specific profile
  app.get('/my-bids/:id', function(req,res){
    res.render("profileBids", {});
  });

  //See all messages for this user
  app.get('/my-messages/:id', function(req,res){
    res.render("profileMessages", {});
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
