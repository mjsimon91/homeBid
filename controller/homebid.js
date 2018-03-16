module.exports = function(app){
  //get the profile
  app.get('/profile', function(req,res){
    res.render("profile", {});
  })
}
