var db = require("../models");

module.exports = function(app) {
  //get request to return all homes
  app.get("/api/homes", function(req, res) {
    db.Homes.findall({
      where: {
        activeListing: true
      }
    }).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });

  //find individual homes
  app.get("/api/homes/:id", function(req, res) {
    db.Homes.findOne({
      where: {
        id: req.params.id,
        activeListing: true
      }
    }).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });

  //add new homes
  app.post("/api/homes", function(req, res) {
    db.Homes.create(req.body).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });
}
