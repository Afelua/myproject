function errorForm() {

  event.preventDefault();

  var my_name = document.getElementById("name-id");

  if (my_name.value === "" ) {
      my_name.style.border = "1px solid red";
  }

  var my_surname = document.getElementById("surname-id");
  if (my_surname.value === "" ) {
      my_surname.style.border = "1px solid red";
  }
}


var my_button = document.getElementById("button-id");

my_button.addEventListener("click", errorForm);