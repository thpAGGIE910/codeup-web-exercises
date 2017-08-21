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

    /*
    * Extra Credit
    * https://gist.github.com/zgulde/6caa27c302cf5a28b534b7f3f375e03a
    *
    * Write a function that accepts an array whose elements are arrays where each inner array consists of two numbers.
    * The function should return the index of the element whose two inner numbers add up to 9, or -1 if no pairs add up
    * to 9.
    *
    * findIndexWhereSumIs9([[1, 2], [3, 4], [4, 5], [9, 1]]) // returns 2
    * findIndexWhereSumIs9([[10, 2], [11, -2], [2, 5], [9, 1]]) // returns 1
    * findIndexWhereSumIs9([[10, 2], [11, -7], [2, 5], [9, 1]]) // returns -1
    */
    function findIndexWhereSumIs9(arrays) {
        return sumEmUp(arrays).indexOf(9);
    }

    /*
     * Write a function that accepts an array whose elements are arrays of numbers. The function should return the
     * original array, but in the place of each element, the sum of the numbers from the inner array.
     *
     * sumEmUp([[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]]) // returns [1, 6, 15, 5]
     */
    function sumEmUp(arrays) {
        return arrays.map(function (array) {
            return array.reduce(function(sum, value) {
                return sum + value;
            }, 0);
        });
    }

    console.log(findIndexWhereSumIs9([[1, 2], [3, 4], [4, 5], [9, 1]]));
    console.log(findIndexWhereSumIs9([[10, 2], [11, -2], [2, 5], [9, 1]]));
    console.log(findIndexWhereSumIs9([[10, 2], [11, -7], [2, 5], [9, 1]]));

    console.log(sumEmUp([[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]]));
})();
