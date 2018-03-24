$(function() {

  $('.make-offer-btn').on('click', function(event) {
    event.preventDefault();

    $('#modal-bid-amount').text($(this).attr('data-bid'));
    $('#modal-description').text($(this).attr('data-description'));
    $('#modal-img').attr('src', $(this).attr('data-img-url'));

    var homeId = $(this).attr('data-home-id');
    var bidCount = parseInt($(this).attr('data-bid-count'));
    var viewCount = parseInt($(this).attr('data-view-count'));

    viewCount++;
    var updateListing = {
      viewCount: viewCount,
      bidCount: bidCount
    }

    $.ajax('/api/homes/' + homeId, {
      type: 'PUT',
      data: updateListing
    }).then(function(res) {
      console.log('updating view count to:', updateListingView);
    });

    $('#place-bid').on('click', function(event) {
      event.preventDefault();

      var memberId = sessionStorage.gitItem('member');
      var bidAmount = parseFloat($('#bid-amount').val().trim());
      var bidTerms = $('#bid-terms').val();
      var cashOffer = false;
      var asIs = false;

      for (var i = 0; i < bidTerms.length; i++) {

        if (bidTerms[i] === 'cash offer') {
          cashOffer = true;
        }

        if (bidTerms[i] === 'as is') {
          asIs = true;
        }
      }

      var winningBid = false; // default to false. Person selling home needs to except

      var newBid = {
        homeId: homeId,
        memberId: memberId,
        bidAmount: bidAmount,
        cashOffer: cashOffer,
        asIs: asIs,
        winningBid: winningBid
      }

      bidCount++;
      updateListing = {
        viewCount: viewCount,
        bidCount: bidCount
      }

      console.log(updateListing);

      $.ajax('/api/bids', {
        type: 'POST',
        data: newBid
      }).then(function(res) {});

      $.ajax('/api/homes/' + homeId, {
        type: 'PUT',
        data: updateListing
      }).then(function(res) {});

    });
  });
});
