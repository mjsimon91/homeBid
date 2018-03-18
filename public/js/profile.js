$(document).ready(function() {
    //Used for materialize
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});



    //get the URL ID
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);


    $('#submitProfile').on('click',function(){

      var updatedPerson = {
        firstName: $('#firstName').val().trim(),
        lastName : $('#lastName').val().trim(),
        email: $('#email').val().trim(),
        about: $('#about').val().trim()
      };

      getprofile(id);
    });

    //send the ajax call to update the data

  });

function getprofile(id){

  $.ajax({
    url: '/api/members/' + id,
    method: 'GET'
  }).done(function(data){
    console.log(data);
  })
}
