var db = require("../models");

module.exports = function(app) {

  //get request to return all homes
  app.get("/api/homes", function(req, res) {
    db.Homes.findAll({}).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });

  //find individual homes
  app.get("/api/homes/:id", function(req, res) {
    db.Homes.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbHomes) {
      res.json(dbHomes)
    });
  });

  // update home
  app.put("/api/homes/:id", function(req, res) {
    db.Homes.update(
      {viewCount: req.body.viewCount,
      bidCount: req.body.bidCount},
      {where: {id: req.params.id}}
    );
  });

  //add new homes
  app.post("/api/homes", function(req, res) {
    db.Homes.create(req.body).then(function(dbHomes) {
      res.json(dbHomes)
    });
  });
}
