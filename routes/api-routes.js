// Dependencies
var db = require("../models")

//API routes
module.exports = function(app){

  //Get the route for profile information for one person
  app.get("/api/members/:id", function(req, res){
		db.Members.findAll({
			where: {
				id: req.params.id
			}
		}).then(function(dbMembers){
			res.json(dbMembers);
		});
	});

  //Update the user profile
  app.put('/api/members/:id', function(req,res){
    db.Members.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbMembers){
      if (dbMembers) {
        res.statusCode = 200
      }else {
        res.statusCode = 500
      }
    });
    console.log(res);
  });


};
