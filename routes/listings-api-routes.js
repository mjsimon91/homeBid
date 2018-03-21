var db = require("../models");

module.exports = function(app) {
  //get request to return all homes
  app.get("/api/homes", function(req, res) {
    db.Homes.findAll({
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

  //Get all listings by a specific member for the profile
  app.get('/api/allHomes/:id', function(req,res){
    db.Homes.findAll({
      where: {
        id: req.params.id,
        activeListing: true
      }
    }).then(function(dbHomes){
      res.json(dbHomes);
    });
  });

  //add new homes
  app.post("/api/homes", function(req, res) {
    console.log(req.body);
    db.Homes.create({
      title: req.body.title,
      address: req.body.address,
      description: req.body.description,
      imgUrl: req.body.imgUrl
    }).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });
}
