db = require('../models');

module.exports = function(app) {

  app.post('/api/homes', function(req, res) {
    db.Homes.create(req.body).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });

}
