(function () {
    "use strict";

    const UP_ARROW = 38;
    const DOWN_ARROW = 40;
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    const A_KEY = 65;
    const B_KEY = 66;
    const ENTER_KEY = 13;
    const KONAMI_CODE = [ UP_ARROW, UP_ARROW, DOWN_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, LEFT_ARROW, RIGHT_ARROW,
        B_KEY, A_KEY, ENTER_KEY ];


    $(document).ready(function () {
        var keyInSequence = 0;
        var extraLivesAudioClip = document.getElementById("1up-sound");

        extraLivesAudioClip.addEventListener("ended", function() {
            alert("You get 30 lives!!!!!");
            this.currentTime = 0;
            keyInSequence = 0;
        });

        $("body").on('keydown', function (evt) {
            if (evt.keyCode === KONAMI_CODE[keyInSequence]) {
                keyInSequence++;

                if (keyInSequence >= KONAMI_CODE.length) {
                    extraLivesAudioClip.play();
                }

            } else {
                keyInSequence = 0;
            }
        });
    });
})();