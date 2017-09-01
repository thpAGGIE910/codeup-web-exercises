"use strict";

// ---------------------- Problem 1 ----------------------
function sumsAndCubesOfArrays(a, b) {
    var aSumOfSquares = 0;
    var bSumOfCubes = 0;

    a.forEach(function (element) {
       aSumOfSquares += squared(element);
    });

    b.forEach(function (element) {
        bSumOfCubes += cubed(element);
    });

    return aSumOfSquares > bSumOfCubes;
}

function squared(num) {
    return Math.pow(num, 2);
}

function cubed(num) {
    return Math.pow(num, 3);
}
// -------------------------------------------------------

// ---------------------- Problem 2 ----------------------
function countMe(numString) {
    var numArray = numString.split('');
    var curr = numString[0] || "";
    var sameNumbersCount = 0;
    var outputString = "";

    for(var i = 0; i < numArray.length; i++) {
        if(!isNaN(numArray[i])) {
            if(curr === numArray[i]) {
                sameNumbersCount++;
            } else {
                outputString += (sameNumbersCount + curr);
                curr = numArray[i];
                sameNumbersCount = 1;
            }
        } else {
            return "";
        }
    }
    outputString += (sameNumbersCount + curr);

    return outputString;
}

// -------------------------------------------------------

// ---------------------- Problem 3 ----------------------
class personInfo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }
}
// -------------------------------------------------------