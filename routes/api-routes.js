db = require('../models');

module.exports = function(app) {

  app.get('/api/homes/', function(req, res) {
    db.Homes.findAll({}).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });

  app.post('/api/homes/', function(req, res) {
    db.Homes.create(req.body);
  });

}
