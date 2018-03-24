// // var app = express();
// var db = require("../models")

$(document).ready(function() {

//user clicks on the submit button
$("#searchSubmit").on("click", function(){
	event.preventDefault()
	console.log("button click works");

	var searchTerm = $("#homeScreenSearch").val().trim();
	console.log(searchTerm);
	localStorage.clear();
	localStorage.setItem("searchterm", searchTerm);
	

	var zipCode = searchTerm.match(/\b\d{5}\b/g);
	console.log("zipcode is " + zipCode); 
	if (searchTerm.match(/^\d/) && zipCode == null) {
		console.log("enter a valid 5 zip code");
	} else if (searchTerm.match(/^\d/) && zipCode!= null) {
		console.log("the user entered a zip code")
		window.location.href = "/view-listings/zip/" + zipCode
		getHomesByZip(zipCode);
	}

	if (searchTerm.charAt(0) >= 'A' && searchTerm.charAt(0) <= 'Z' ) {
	var splitSearchTerm = searchTerm.split(",");
	var searchCity = splitSearchTerm[0].trim();
	var searchState = splitSearchTerm[1].trim();
	console.log("city is " + searchCity);
	console.log("state is " + searchState);
	window.location.href = "/view-listings/" + searchState + "/" + searchCity;
	getHomesByCity(searchCity, searchState)
	};


	//route to html page 


//    app.get('/my-listings', function(req,res){
//    res.render("profileListings", {});
//   });


});

//function to get posts by zipcode
function getHomesByZip(zipCode) {
	var zipCodeString = "/zip/" + zipCode
	console.log("zipCodeString is " + zipCodeString)
	$.get("/api/homes" + zipCodeString, function(data){
		console.log("Homes", data);
		homesdata = data;
	})
};

//function to get posts by zipcode
function getHomesByCity(searchCity, searchState) {
	var cityString = "/" + searchState + "/" + searchCity;
	console.log("cityString is " + cityString)
	$.get("/api/homes" + cityString, function(data){
		console.log("Homes", data);
		homesdata = data;
	})
};

});