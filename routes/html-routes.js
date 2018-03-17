// Dependencies
// =============================================================
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
    res.render("profileListings", {});
  });

  // Get the Bids for a specific profile
  app.get('/profile/:id/bids', function(req,res){
    res.render("profileBids", {});
  });

  //See all messages for this user
  app.get('/profile/:id/messages', function(req,res){
    res.render("profileMessages", {});
  });

};
