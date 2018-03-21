$(function() {
  // CREATE listing
  $('#submit-listing').on('click', function(event) {
    event.preventDefault();

    var title = $('#title-line').val().trim();
    var addressLine1 = $('#address-line-1').val().trim(); // update with all address form...
    var addressLine2 = $('#address-line-2').val().trim();
    var addressCity = $('#address-city').val().trim();
    var addressState = $('#address-state').val().trim();
    var addressZip = $('#address-zip').val().trim();
    var imgUrl = 'https://lorempixel.com/250/250/city'; // for now <- $('#imgUrl-line').val().trim();
    var description = $('#description-text').val().trim();

    // front end validation for input here

    var newHome = {
      title: title,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      addressCity: addressCity,
      addressState: addressState,
      addressZip: addressZip,
      imgUrl: imgUrl,
      description: description
    };

    $.ajax('/api/homes', {
      type: 'POST',
      data: newHome
    }).then(
      function(res) {}
    );
  });
});
