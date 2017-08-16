"use strict";

// ----- Multiplication Tables ------
var userNumber = prompt("Please enter a number between 1 and 10: ");

alert("Check the console for the multiplication table for " + userNumber);

for (var i = 1; i <= 10; i++) {
    console.log(userNumber + " * " + i + " = " + userNumber * i);
}

// ----- Random Numbers -----
const MIN_NUMBER = 20;
const MAX_NUMBER = 200;

var randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER;

for(var i = 0; i < 10; i++) {
    if((randomNumber % 2) == 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }

    randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER;
}
