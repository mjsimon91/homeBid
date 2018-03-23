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
    var imgUrl = $('#upload-image').val().trim();; // for now <- $('#imgUrl-line').val().trim();
    var description = $('#description-text').val().trim();

    // front end validation for input here

    var newHome = {
      title: title,
      addressOne: addressLine1,
      addressTwo: addressLine2,
      city: addressCity,
      state: addressState,
      zipCode: addressZip,
      imgUrl: imgUrl,
      description: description
    };

    console.log(newHome.imgUrl);

    $.ajax('/api/homes', {
      type: 'POST',
      data: newHome
    }).then(function(res) {});
  });
});
