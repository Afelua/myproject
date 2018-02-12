// Code goes here

var my_number = prompt("Введите число", 100);

console.log(my_number);

if (my_number < 0) {
  my_number = -my_number;
  console.log("Мое число было меньше нуля!");
}


console.log(my_number);
