function nameSearch() {
    var input_name, input_age, input_city, filter, table, tr, td, i, txtValue_name, txtValue_age, txtValue_city;
  
    input_name = document.getElementById("name-search");
    input_age = document.getElementById("age-search");
    input_city = document.getElementById("city-search");
  
    filter_name = input_name.value.toUpperCase();
    filter_age = input_age.value.toUpperCase();
    filter_city = input_city.value.toUpperCase();
  
  
    table = document.getElementById("custom-table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td_name = tr[i].getElementsByTagName("td")[0];
      if (td_name) {
        txtValue_name = td_name.textContent || td_name.innerText;
        if (txtValue_name.toUpperCase().indexOf(filter_name) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
  
      }
    }
  }
  
  /*function ageSearch() {
    var input_name, input_age, input_city, filter, table, tr, td, i, txtValue_name, txtValue_age, txtValue_city;
  
    input_name = document.getElementById("name-search");
    input_age = document.getElementById("age-search");
    input_city = document.getElementById("city-search");
  
    filter_name = input_name.value.toUpperCase();
    filter_age = input_age.value.toUpperCase();
    filter_city = input_city.value.toUpperCase();
  
  
    table = document.getElementById("custom-table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td_age = tr[i].getElementsByTagName("td")[1];
      if (td_age) {
        txtValue_age = td_age.textContent || td_age.innerText;
        if (txtValue_age.toUpperCase().indexOf(filter_age) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
  
      }
    }
  }
  
  function citySearch() {
    var input_name, input_age, input_city, filter, table, tr, td, i, txtValue_name, txtValue_age, txtValue_city;
  
    input_name = document.getElementById("name-search");
    input_age = document.getElementById("age-search");
    input_city = document.getElementById("city-search");
  
    filter_name = input_name.value.toUpperCase();
    filter_age = input_age.value.toUpperCase();
    filter_city = input_city.value.toUpperCase();
  
  
    table = document.getElementById("custom-table");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td_city = tr[i].getElementsByTagName("td")[2];
      if (td_city) {
        txtValue_city = td_city.textContent || td_city.innerText;
        if (txtValue_city.toUpperCase().indexOf(filter_city) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
  
      }
    }
  }*/