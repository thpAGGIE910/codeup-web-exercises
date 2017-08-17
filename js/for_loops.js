"use strict";

// ----- Multiplication Tables ------
/*
 Write the JS code to prompt the user for a number between 1 and 10, then log to the console the multiplication table for that number. For instance, if the user enters is 7, the console output should look like:

 7x1=7
 7x2=14
 7x3=21
 7x4=28
 7x5=35
 7x6=42
 7x7=49
 7x8=56
 7x9=63
 7x10=70
 */

var userNumber = prompt("Please enter a number between 1 and 10: ");

alert("Check the console for the multiplication table for " + userNumber);

for (var i = 1; i <= 10; i++) {
    console.log(userNumber + " * " + i + " = " + userNumber * i);
}

// ----- Random Numbers -----
/*
 Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

 123 is odd
 80 is even
 24 is even
 199 is odd
 ...
 */

const MIN_NUMBER = 20;
const MAX_NUMBER = 200;

var randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER;

for (var i = 0; i < 10; i++) {
    if((randomNumber % 2) == 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }

    randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER;
}

// ----- Tower of Numbers -----
/*
 Use inline JavaScript to create a for loop that uses console.log to create the output shown below.

 1
 22
 333
 4444
 55555
 666666
 7777777
 88888888
 999999999
 0000000000
 */

var message = "";

for (var i = 1; i <= 10; i++) {
    var numberToPrint = (i !== 10) ? i : 0;

    for (var counter = 0; counter < i; counter++) {
        message += numberToPrint;
    }
    console.log(message);
    message = "";
}

// ----- Countdown from 100 ------
/*
 Create a for loop that uses console.log to create the output shown below.

 100
 95
 90
 85
 80
 75
 70
 65
 60
 55
 50
 45
 40
 35
 30
 25
 20
 15
 10
 5
 */

for (var i = 20; i > 0; i--) {
    console.log(5 * i);
}

// ----- Extra Credit: Pyramid of Stars -----
/*
 Write a JavaScript program to construct the following pattern, using a nested for loop. Prompt the user the number of the final length of the stars.

 Example:

User input: 5

Result:
*
* *
* * *
* * * *
* * * * *
*/

var maxRows = 0;
var validInput = false;
message = "";

do {
    maxRows = prompt("How high should the pyramid be?");

    if (isNaN(maxRows) || maxRows < 1 || maxRows > 10) {
        alert("You did not enter a number between 1 and 10...");
    } else {
        validInput = true;
    }
} while (!validInput);

console.log("User Input: " + maxRows + "\n");
console.log("Result:\n");

for (var numRows = 0; numRows < maxRows; numRows++) {
    message = "";
    for(var numStars = 0; numStars <= numRows; numStars++) {
        message += "* ";
    }
    console.log(message);
}
