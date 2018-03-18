// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  //Show the first page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get('/form', function(req, res) {
    res.render('form', {});
  });

  app.get('/listings', function(req, res) {

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
