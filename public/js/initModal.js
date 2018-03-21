$(function() {

  //initialize all modals
  $('.modal').modal({
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      $('.carousel').carousel();
    }
  });

  //or by click on trigger
  $('.trigger-modal').modal();

}); // end of document ready
