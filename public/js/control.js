$(function() {

  $('#submit-listing').on('click', function(event) {

    $.ajax('/api/homes', {
      type: 'GET',
      data: newHome
    }).then(
      function(res) {}
    );
  });

});
