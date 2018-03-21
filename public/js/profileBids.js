var url = window.location.pathname;
var memberId = url.substring(url.lastIndexOf('/') + 1);

$(document).ready(function() {
    //Used for materialize
    $('select').material_select();
    $('.tooltipped').tooltip({delay: 50});

    // //Hide the alerts
    // $('.successAlert').hide();
    // $('.failedAlert').hide();


    getMemberBids();


  });

// function to get all of the homes that are associated with an attendee
function getMemberBids(id){
  $.ajax({
    url: '/api/allHomes/' + memberId,
    method: "GET"
  }).done(function(data){
    var title = data.title;
    var address = data.address;
    var description = data.description;
    var bidAmount = data.bidAmount;
    var bidCount = data.bidCount;
    var viewCount = data.viewCount;
    var imgUrl = data.imgUrl;
    var createdAt = data.createdAt;
  });
}
