module.exports = function(app){
  //get the profile
  app.get('/profile/:id', function(req,res){
    res.render("profile", {});
  })
}
