//Setting the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');

var app = express();

//Set the Port
var PORT = process.env.PORT || 3000;

//serve the static content from the public folder
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse the JSON application
app.use(bodyParser.json());

//If we decide to use handlebars...uncomment the next few lines
//var exphbs = require('express-handlebars');

//The handlebars files are .handlebars
// app.engine("handlebars", exphbs({defaultLayout: 'main'}));
// app.set("view engine", "handlebars");

app.listen(PORT, function(){
    console.log(`The application is now listening on Port ${PORT}`)
})
