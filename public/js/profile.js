$(document).ready(function() {
    //Used for materialize
    // $('select').material_select();

    $('#submitProfile').on('click',function(){

      // var updatedPerson = {
      //   firstName: ('#firstName').val().trim(),
      //   lastName : ('#lastName').val().trim(),
      //   email: ('#email').val().trim(),
      //   about: ('#about').val().trim()
      // };



      console.log('id ' + profileId);



    })

    //send the ajax call to update the data

  });

function getprofile(){

var profileId = req.params.id

  $.ajax({
    url: '/api/members/' + profileId,
    method: 'GET'
  }).done(function(data){
    console.log(data);
  })
}
