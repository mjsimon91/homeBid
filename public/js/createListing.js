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

    var memberId = sessionStorage.getItem("member");

    // front end validation for input here

    var newHome = {
      title: title,
      addressOne: addressLine1,
      addressTwo: addressLine2,
      city: addressCity,
      state: addressState,
      zipCode: addressZip,
      imgUrl: imgUrl,
      description: description,
      MemberId: memberId
    };

    $.ajax('/api/homes', {
      type: 'POST',
      data: newHome
    }).then(function(res) {
      location.reload();
    });
  });
});
