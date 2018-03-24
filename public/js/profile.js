//get the URL ID
// var url = window.location.pathname;
var memberId = sessionStorage.getItem("member");

$(document).ready(function() {
    //Used for materialize
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});

    //Hide the alerts (These don't do anything yet)
    $('.successAlert').hide();
    $('.failedAlert').hide();


    getprofile(memberId);

    //send the ajax call to update the data

  });
//Click on the 'Profile' button
$('#profile').on('click', function(){
  window.location ='/my-profile/' + memberId;
});

//Click on the listings item
$('#listings').on('click', function(){
  window.location ='/my-listings/' + memberId;
});

//Click on bids
$('#bids').on('click', function(){
  window.location ='/my-bids/' + memberId;
});

//Get all of my messages
$('#messages').on('click', function(){
  window.location ='/my-messages/' + memberId;
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
    success: function(data, status, jqXHR){
      $('.successAlert').show()
      setTimeout(function() {
       $('.successAlert').fadeOut();
      }, 2000);
    },
    error: function(data, status, jqXHR){
      $('.failedAlert').show()
      setTimeout(function() {
       $('.failedAlert').fadeOut();
      }, 2000);
    }
  }).then(function(response){
    console.log(response);
  })

});

//Start a new conversation
$('#submitMessage').on('click', function(event){
  event.preventDefault();
  var newMessage = {
    message:$('#message').val().trim(),
    ChatRoomId: memberId,
    MemberId: sessionStorage.getItem("member")
  };
  console.log(newMessage);
  // Create new message
  $.ajax('/api/chatRoom/', {
    type: 'POST',
    data: newMessage
  }).then(function(response){
    console.log(response);
    location.reload();
  });
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
