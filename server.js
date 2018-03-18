//Setting the dependencies
var exphbs = require('express-handlebars');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Set the Port
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

//serve the static content from the public folder
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse the JSON application
app.use(bodyParser.json());

// If we decide to use handlebars...uncomment the next few lines


// The handlebars files are .handlebars
app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set("view engine", "handlebars");

//Run the html routes for non handelbars pages
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app)

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
      console.log(`The application is now listening on Port ${PORT}`);
  });
});
