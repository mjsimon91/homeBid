// // var app = express();
// var db = require("../models")

$(document).ready(function() {

//user clicks on the submit button
$("#searchSubmit").on("click", function(){
	event.preventDefault()
	console.log("button click works");

	var searchTerm = $("#homeScreenSearch").val().trim();
	console.log(searchTerm);
	var zipCode = searchTerm.match(/\b\d{5}\b/g);
	console.log("zipcode is " + zipCode); 
	if (searchTerm.match(/^\d/) && zipCode == null) {
		console.log("enter a valid 5 zip code");
	} else if (searchTerm.match(/^\d/) && zipCode!= null) {
		console.log("the user entered a zip code")
		getHomes(zipCode);
	}

	if (searchTerm.match
		("^[a-z]/i")) {
	var splitSearchTerm = searchTerm.split(",");
	var searchCity = splitSearchTerm[0];
	var searchState = splitSearchTerm[1];
	console.log("city is " + searchCity);
	console.log("state is " + searchState);
	};


	//route to html page 


//    app.get('/my-listings', function(req,res){
//    res.render("profileListings", {});
//   });


});

//function to get posts by zipcode
function getHomes(zipCode) {
	var zipCodeString = "/zipcode/" + zipCode
	$.get("/api/homes" + zipCodeString, function(data){
		console.log("Homes", data);
		homesdata = data;
	})
};

});