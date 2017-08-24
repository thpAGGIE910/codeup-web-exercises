/*
* Create a function that asks the user if they are still active in the web page every 45 seconds, use a confirm dialog
* to get the users input to decide if they want to stay in the same page, if they click cancel, redirect them to
* http://google.com. if they click accept leave them in the same page.
*/

(function () {
    "use strict";

    var inactiveTimer = 45000;

    function isUserActive() {
        var userIsActive = confirm("Are you still active on the page");

        if (userIsActive) {
            setInactiveTimer();
        }
        else {
            window.location = "https://google.com";
        }
    }

    function setInactiveTimer() {
        setTimeout(isUserActive, inactiveTimer);
    }

    setInactiveTimer();
})();