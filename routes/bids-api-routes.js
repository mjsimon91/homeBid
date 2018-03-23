var db = require("../models");

module.exports = function(app) {

  //Find all bids
  app.get("/api/bids", function(req, res) {
    db.Bids.findAll({}).then(function(dbBids) {
      res.json(dbBids);
    });
  });

  //Find all bids by a specific member
  app.get("/api/bids/:id", function(req, res){
    db.Bids. findAll({
      where: {
        id: req.params.id
      },
      include: [{model: db.Homes}]
    }).then(function(dbBids){
      res.json(dbBids);
    });
  });

  //route to create a new member
  app.post("/api/bids", function(req, res){
    db.Bids.create(req.body).then(function(dbBids){
      res.json(dbBids)
    });
  });

}
