var db = require("../models");

module.exports = function(app) {

  app.get("/api/bids", function(req, res) {
    db.Bids.findAll({}).then(function(dbBids) {
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
