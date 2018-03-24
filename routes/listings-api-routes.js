var db = require("../models");
const url = require('url'); 

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

  //find a home by zip code
    app.get("/api/homes/zip/:zipcode", function(req, res) {
    db.Homes.findAll({
      where: {
        zipCode: req.params.zipcode
      }
    }).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });;

      //find a home by city code
    app.get("/api/homes/:state/:city", function(req, res) {
    db.Homes.findAll({
      where: {
        city: req.params.city,
        state: req.params.state
      }
    }).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });


}
