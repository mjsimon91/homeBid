var db = require("../models");

module.exports = function(app) {
//find all members
	app.get("/api/members", function(req, res){
		db.Members.findAll({}).then(function(dbMembers){
			res.json(dbMembers);
		});
	});

	//find all homes posted by an individual member
	app.get("/api/members/:id", function(req, res){
		db.Members.findOne({
			where: {
				id: req.params.id
			},
				include: [db.Homes]
		}).then(function(dbMembers){
			res.json(dbMembers);
		});
	});

	//route to create a new member
	app.post("/api/members", function(req, res){
		db.Members.create(req.body).then(function(dbMembers){
			res.json(dbMembers)
		})
	})

  // route to update a member
	app.put('/api/members/:id', function(req,res){
    db.Members.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbMembers){

    });
  });
}
