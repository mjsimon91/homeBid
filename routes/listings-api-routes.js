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

  // //find a home by zip code
  //   app.get("/api/homes/zipcode/:zipcode", function(req, res) {
  //   db.Homes.findAll({
  //     where: {
  //       zipCode: req.params.zipcode
  //     }
  //   }).then(function(dbHomes) {
  //     res.json(dbHomes);
  //   });
  // });;

  //     //find a home by city code
  //   app.get("/api/homes/:state/:city", function(req, res) {
  //   db.Homes.findAll({
  //     where: {
  //       city: req.params.city,
  //       state: req.params.state
  //     }
  //   }).then(function(dbHomes) {
  //     res.json(dbHomes);
  //   });
  // });

    //create dynamic URL
    app.get('/api/homes/:state/:city', function(req, res) {
    res.redirect(url.format({
       pathname:"/",
       query: {
          "state": req.params.state,
          "city": req.params.city
        }
    }));
    });

    app.get('/api/homes/zipcode/:zipcode', function(req, res) {
    res.redirect(url.format({
       pathname:"/zipcode/:zipcode",
       query: {
          "zipcode": req.params.zipcode
        }
     }));
 });


}
