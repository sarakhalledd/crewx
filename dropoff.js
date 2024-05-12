$(function() {
    $(".booking label").click(function() {
      var $self = $(this).parent();
      $("input", $self).trigger("click");
      $(".checked").removeClass("checked");
      $self.addClass("checked");
    });

    $("form").submit(function(e) {
      e.preventDefault();
      /*var formData = new FormData(this);
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }*/
      window.location.href = 'donconfirm.html';
    });
  });

  /*function thankyou() {
    // Check if a radio button with class 'book' is checked
    var isChecked = document.querySelector('.book:checked');
    
    // If a radio button is checked
    if (isChecked) {
        // Redirect to another HTML page
        window.location.href = 'donconfirm.html';
    } else {
        // If no radio button is checked, do nothing or show an error message
        alert('Please select a time slot before submitting.');
    }
}*/
