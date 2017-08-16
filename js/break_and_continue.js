"use strict";

/*
 Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
Your output should look like this:

Number to skip is: 27

Here is an odd number: 1
Here is an odd number: 3
....
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
....
Here is an odd number: 49
 */

var userNumber = 0;
var message = "";

do {
    userNumber = parseInt(prompt("Enter an odd number between 1 and 50: "));

    if (isNaN(userNumber)) {
        message = "Please enter a numeric value.";
    } else if (userNumber % 2 === 0) {
        message = userNumber + " is an even number, please enter an odd number.";
    } else if (userNumber < 1 || userNumber > 50) {
        message = userNumber + " is less than 1 or greater than 50.";
    } else {
        console.log("Number to skip is: " + userNumber);
        break;
    }

    alert(message);

} while (isNaN(userNumber) || (userNumber % 2) === 0 || userNumber < 1 || userNumber > 50);

for (var oddNumber = 1; oddNumber < 50; oddNumber += 2) {
    if (oddNumber === userNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log("Here is an odd number: " + oddNumber);
}
