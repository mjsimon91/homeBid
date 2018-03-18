// Dependencies
var db = require("../models")

//API routes
module.exports = function(app){
  //Get the route for profile information for one person
  app.get("/api/members/:id", function(req, res){
		db.Members.findAll({
			where: {
				id: req.params.id
			},
		}).then(function(dbMembers){
			res.json(dbMembers);
		});
	});
};
