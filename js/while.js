"use strict";

var powersOfTwo = 2;

while(powersOfTwo <= 65536) {
    console.log(powersOfTwo);
    powersOfTwo *= 2;
}

// ------ Selling Ice Cream Cones ------
var allCones = Math.floor(Math.random() * 50) + 50;
var cones;

do {
    cones = Math.floor(Math.random() * 5) + 1;

    if(allCones >= cones) {
        allCones -= cones;
        console.log(cones + " cones sold...");
    } else  {
        console.log("Cannot sell you " + cones + ", I only have " + allCones + "...");
    }


} while (allCones > 0);

console.log("Yay! I sold them all!");
