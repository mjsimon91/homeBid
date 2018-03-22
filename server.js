//Setting the dependencies
var exphbs      = require('express-handlebars');
var express     = require('express');
var exphbs      = require('express-handlebars');
var bodyParser  = require('body-parser');
var app = express();

//Set the Port
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

//serve the static content from the public folder
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

//parse the JSON application
app.use(bodyParser.json());

//The handlebars files are .handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Routes
// =============================================================
require('./routes/listings-api-routes.js')(app);
require('./routes/members-api-routes.js')(app);
require('./routes/bids-api-routes.js')(app);
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app)

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`The application is now listening on Port ${PORT}`)
  });
});
