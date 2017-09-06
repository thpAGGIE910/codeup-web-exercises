(function () {
    "use strict";

    $(document).ready(function () {
        const RESGISTRATION_PROMPT_DELAY = 8000;

        $(".faq-question a").click(function (e) {
            e.preventDefault();

            $(this).parent().next(".faq-answer").toggleClass("invisible");
        });

        $("#facts-highlight-btn").click(function (e) {
            e.preventDefault();

            $(".facts-list-item:last-child").css("background-color", "yellow");
        });

        $(".facts-title").click(function () {
            $(this).next().children().css("font-weight", "bold");
            $(this).next(".facts-list").slideToggle();
        });

        $(".facts-list-item").click(function () {
            $(this).parent().children().first().css("color", "blue");
        });

        $(".newsletter-signup-container .close-btn").click(function () {
            $(this).parent().hide();
        });



        setTimeout(function () {
            $(".registration-modal").fadeIn();

        }, 3000);

        $(".registration-modal .close-btn").click(function () {
            console.log("Button clicked");
        });
    });
})();