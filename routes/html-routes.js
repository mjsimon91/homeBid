// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  //Show the first page
  app.get("/", function(req, res) {
    res.render("home", {});
  });

  //get the profile
  app.get('/my-profile/:id', function(req, res) {
    res.render("profile", {
      memberId: req.params.id
    });
  });

  //Get the listings for a sepcific profile
  app.get('/my-listings/:id', function(req, res) {

    db.Homes.findAll({
      where: {
        MemberId: req.params.id
      }
    }).then(function(dbHomes) {
      var hbsObject = {
        listings: dbHomes,
        memberId: req.params.id
      }
      console.log(hbsObject);
      res.render("profileListings", hbsObject);
    })


  });

  // Get the Bids for a specific profile
  app.get('/my-bids/:MemberId', function(req, res) {
    db.Bids.findAll({
      where: {
        MemberId: req.params.MemberId
      },
      include: [{
        model: db.Homes
      }]
    }).then(function(dbHomes) {
      var hbsObject = {
        bids: dbHomes,
        memberId: req.params.MemberId
      }
      console.log('*********************************');
      console.log('*********************************');
      console.log('*********************************');
      console.log(hbsObject);
      console.log('*********************************');
      console.log('*********************************');
      console.log('*********************************');
      res.render("profileBids", hbsObject);
    })

  });

  //See all messages for this user
  app.get('/my-messages/:id', function(req, res) {
    res.render("profileMessages", {
      memberId: req.params.id
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
      },
      include: [{
        model: db.Bids
      }]
    }).then(function(dbHomes) {

      var homeInfo = hbsArr(dbHomes);

      var hbsObject = {
        listings: homeInfo
      }

      res.render('viewListings',hbsObject);

    });
  });
};

function hbsArr(viewableHomes) {
  var homeInfo = [];

  for (var i = 0; i < viewableHomes.length; i++) {

    var bestBid = displayBid(viewableHomes[i])

    homeInfo[i] = {
      id: viewableHomes[i].dataValues.id,
      title: viewableHomes[i].dataValues.title,
      description: viewableHomes[i].dataValues.description,
      imgUrl: viewableHomes[i].dataValues.imgUrl,
      viewCount: viewableHomes[i].dataValues.viewCount,
      bidCount: viewableHomes[i].dataValues.bidCount,
      bidAmount: bestBid
    }
  }

  return homeInfo;

}

function displayBid(viewableHome) {

  var bestBid;

  for (var j = 0; j < viewableHome.dataValues.Bids.length; j++) {

    var currentBid = viewableHome.dataValues.Bids[j];

    if (currentBid.winningBid) {

      bestBid = currentBid.bidAmount;
      return bestBid;

    } else {

      bestBid = 1.00;
      return bestBid;

    }
  }
}
