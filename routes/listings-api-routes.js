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
      res.json(dbHomes);
    });
  });

  //add new homes
  app.post("/api/homes", function(req, res) {

    console.log('POST:', req.body);

    db.Homes.create(req.body).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });

  //find a home by zip code
    app.get("/api/homes/zipcode/:zipcode", function(zipCode, res) {
    db.Homes.findAll({
      where: {
        zipCode: zipCode
      }
    }).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });;
}
