(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    var brs = planetsArray.join("<br>") + "<br>";
    console.log(brs);
    // Why might this be useful?
    // To dynamically create HTML elements


    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var ul = "<ul><li>" + planetsString.split("|").join("</li><li>") + "</li></ul>";
    console.log(ul);
})();
