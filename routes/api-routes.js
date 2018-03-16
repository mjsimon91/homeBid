db = require('../models');

module.export = function(app, {
  app.post('/api/homes', function(req, res) {
    db.post.create({req.body}).then(function(dbHomes) {
      res.json(dbHomes);
    });
  });
});
