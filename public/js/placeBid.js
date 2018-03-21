$(function() {
  $('#place-bid').on('click', function(event) {
    event.preventDefault();

    console.log('bid engaged');

    var bidAmount = $('#bid-amount').val().trim();
    var bidTerms = $('#bid-terms').val();
    var cashOffer = false;
    var asIs = false;

    for (var i = 0; i < bidTerms; i++) {

      if (bidTerms(i) === 'cash offer') {
        cashOffer = true;
      }

      if (biderms(i) === 'as is') {
        asIs = true;
      }
    }

    var winningBid = false; // default to false. Person selling home needs to except

    var newBid = {
      bidAmount: bidAmount,
      cashOffer: cashOffer,
      asIs: asIs,
      winningBid: winningBid
    }

    console.log(bidTerms);

    $.ajax('/api/bids', {
      type: 'POST',
      data: newBid
    }).then(
      function(res) {}
    );
  });

});
