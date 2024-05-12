function toggleTables(tableId) {
    var firstTable = document.getElementById("firsTable");
    var secondTable = document.getElementById("secondTable");

    // Toggle visibility based on which button is clicked
    if (tableId === "firstTable") {
      firstTable.style.display = "table";
      secondTable.style.display = "none";
    } else if (tableId === "secondTable") {
      firstTable.style.display = "none";
      secondTable.style.display = "table";
    }
  }

  // Add event listener when the DOM is loaded
  document.addEventListener("DOMContentLoaded", function(event) {
    // Get the buttons for toggling tables
    var donationButton = document.getElementById("donationbtn");
    var donorButton = document.getElementById("donorbtn");

    // Add click event listeners to the buttons
    donationButton.addEventListener('click', function() {
      toggleTables("firstTable");
    });

    donorButton.addEventListener('click', function() {
      toggleTables("secondTable");
    });
  });

  document.addEventListener("DOMContentLoaded", function(event) {
    // Get all delete buttons
    var deleteButtons = document.querySelectorAll('.rem');

    // Add click event listener to each delete button
    deleteButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Get the parent row and remove it
        var row = this.closest('tr');
        row.parentNode.removeChild(row);
      });
    });
  });