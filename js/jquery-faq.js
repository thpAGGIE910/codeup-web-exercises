(function () {
    "use strict";

    $(document).ready(function () {
        $(".faq-question a").click(function(e) {
            e.preventDefault();

            $(this).parent().next(".faq-answer").toggleClass("invisible");
        });

        $("#facts-highlight-btn").click(function (e) {
            e.preventDefault();

            $(".facts-list-item:last-child").css("background-color", "yellow");
        });

        $(".facts-title").click(function () {
            $(this).next().children().css("font-weight", "bold");
        });

        $(".facts-list-item").click(function () {
            $(this).parent().children().first().css("color", "blue");
        });
    });
})();