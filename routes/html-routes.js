// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  //Show the first page
  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
