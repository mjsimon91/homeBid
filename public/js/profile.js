//get the URL ID
var url = window.location.pathname;
var memberId = url.substring(url.lastIndexOf('/') + 1);

$(document).ready(function() {
    //Used for materialize
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});

    //Hide the alerts
    $('.successAlert').hide();
    $('.failedAlert').hide();


    getprofile(memberId);

    //send the ajax call to update the data

  });

//Button cick to update profile
$('#submitProfile').on('click',function(){

  var updatedPerson = {
    firstName: $('#firstName').val().trim(),
    lastName : $('#lastName').val().trim(),
    email: $('#email').val().trim(),
    about: $('#about').val().trim()
  };

  //Update the logged in attendee in the database
  $.ajax({
    url: '/api/members/' + memberId,
    method: 'PUT',
    data: updatedPerson,
    statusCode: {
      200: function() {
        $('.successAlert').children().show(100)
      }
    }
  }).then(function(response){
    console.log(response);
  })

});


//Function to get the profile for thiis member
function getprofile(id){

  $.ajax({
    url: '/api/members/' + id,
    method: 'GET'
  }).done(function(data){
    var profileImage = data.profileImage;
    var firstName = data.firstName;
    var lastName = data.lastName;
    var email = data.email
    var about = data.about

    //replace all of the html values so that the user can see the info we have for the respective fields
    $('#profileImage').attr('src',profileImage )
    $('#firstName').val(firstName);
    $('#lastName').val(lastName);
    $('#email').val(email);
    $('#about').val(about)
  })
}
