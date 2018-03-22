$(function() {

  $('.make-offer-btn').on('click', function(event) {
    event.preventDefault();

    $('#modal-bid-amount').text($(this).attr('data-bid'));
    $('#modal-description').text($(this).attr('data-description'));

    $.ajax('/api/homes/' + homeId, {

    });
  });

  $('#place-bid').on('click', function(event) {
    event.preventDefault();

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
      bidAmount: bidAmount,
      cashOffer: cashOffer,
      asIs: asIs,
      winningBid: winningBid
    }

    $.ajax('/api/bids', {
      type: 'POST',
      data: newBid
    }).then(
      function(res) {}
    );
  });

});
