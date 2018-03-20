$(function() {

  $('#view-listings').on('click', function(event) {
    event.preventDefault();

    $.ajax('/view-listings', {
      type: 'GET',
    }).then(function(res) {});

  });

});
