"use strict";

// ----- Multiplication Tables ------
var userNumber = prompt("Please enter a number between 1 and 10: ");

alert("Check the console for the multiplication table for " + userNumber);

for (var i = 1; i <= 10; i++) {
    console.log(userNumber + " * " + i + " = " + userNumber * i);
}
