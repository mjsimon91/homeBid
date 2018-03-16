var path = require('path');

module.exports = function(app) {

  app.get('/form', function(req, res) {
    res.render('form', {});
  });

}
