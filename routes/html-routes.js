var path = require('path');

module.export = function(app) {

  app.get('/form', function(req, res) {
    res.render('form', {});
  });
  
}
