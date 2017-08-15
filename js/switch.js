"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    case 'red':
        console.log('Fire engines are red');
        break;

    case 'orange':
        console.log('Pumpkins are orange');
        break;

    case 'yellow':
        console.log('Canaries is yellow');
        break;

    case 'green':
        console.log('The grass is green');
        break;

    case 'blue':
        console.log('The sky is blue');
        break;

    default:
        console.log('I\'m sorry but I don\'t know that color...');
        break;

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

const DISCOUNT_THRESHOLD = 200,
      DISCOUNT_PERCENTAGE = 10;

var cameronPurchases = 180,
    ryanPurchases = 250,
    georgePurchases = 320;

var cameronDiscount = 0,
    ryanDiscount = 0,
    georgeDiscount = 0;


if (cameronPurchases > DISCOUNT_THRESHOLD) {
    cameronDiscount = cameronPurchases * (DISCOUNT_PERCENTAGE / 100);
}

if (ryanPurchases > DISCOUNT_THRESHOLD) {
    ryanDiscount = ryanPurchases * (DISCOUNT_PERCENTAGE / 100);
}

if (georgePurchases > DISCOUNT_THRESHOLD) {
    georgeDiscount = georgePurchases * (DISCOUNT_PERCENTAGE / 100);
}


//------ Word Problem 1: Discount Prices ------
console.log('Name: Cameron');
console.log('Price before discount: $' + cameronPurchases.toFixed(2));
console.log('Discount: $' + cameronDiscount.toFixed(2));
console.log('Total: $' + (cameronPurchases - cameronDiscount).toFixed(2));

console.log('Name: Ryan');
console.log('Price before discount: $' + ryanPurchases.toFixed(2));
console.log('Discount: $' + ryanDiscount.toFixed(2));
console.log('Total: $' + (ryanPurchases - ryanDiscount).toFixed(2));

console.log('Name: George');
console.log('Price before discount: $' + georgePurchases.toFixed(2));
console.log('Discount: $' + georgeDiscount.toFixed(2));
console.log('Total: $' + (georgePurchases - georgeDiscount).toFixed(2));

//------ Word Problem 2: House or Car? ------
var flipCoin = Math.floor(Math.random() * 2);

if (flipCoin === 0) {
    console.log('Buy a car');
}
else {
    console.log('Buy a house');
}

// Refactor to use ternary operator
console.log((flipCoin === 0) ? 'Buy a car' : 'Buy a house');

//------ Word Problem 3: Walmart Lucky Number ------
var luckyNumber = Math.floor(Math.random() * 6);

var discountPercentage = 0;
var receiptAmt = 60;
var totalAfterDiscount = 0;

switch (luckyNumber) {
    case 1:
        console.log('Your discount is 10%');
        discountPercentage = .1;
        break;

    case 2:
        console.log('Your discount is 25%');
        discountPercentage = .25;
        break;

    case 4:
        console.log('Your discount is 50%');
        discountPercentage = .5;
        break;

    case 5:
        console.log('Your get everything for free!!!');
        discountPercentage = 1;
        break;

    default:
        console.log('Sorry, you didn\'t receive a discount');
        break;
}

totalAfterDiscount = receiptAmt * (1 - discountPercentage);
console.log('Grand Total: $' + totalAfterDiscount.toFixed(2));

var userToEnterNum = confirm('Would you like to enter a number?');

if (userToEnterNum) {
    var userInput = prompt('Please enter a number: ');
    var userNumber = parseInt(userInput);

    if (isNaN(userNumber)) {
        alert(userInput + ' is not a number!');
    } else {
        alert('The number ' + userNumber + ' is ' + (((userNumber % 2) === 0) ? 'even.' : 'odd.'));
        alert('The number ' + userNumber + ' + 100 is ' + (userNumber + 100) + '.');
        alert('The number ' + userNumber + ' is ' + ((userNumber >= 0) ? 'positive.' : 'negative.'));
    }
}