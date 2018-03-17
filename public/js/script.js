$(function() {

  // CREATE listing
  $('#submit-listing').on('click', function(event) {
    event.preventDefault();

    console.log('button click');

    var title = $('#title-line').val().trim();
    var address = $('#address-line').val().trim();
    var imgUrl = 'www.google.com'; // for now <- $('#imgUrl-line').val().trim();
    var description = $('#description-text').val().trim();

    // front end validation for input here

    var newHome = {
      title: title,
      address: address,
      imgUrl: imgUrl,
      description: description
    };

    console.log('new home:', newHome);

    $.ajax('/api/homes', {
      type: 'POST',
      data: newHome
    }).then(
      function() {
        console.log('new home listed');

        location.reload();
      }
    );
  });
});
