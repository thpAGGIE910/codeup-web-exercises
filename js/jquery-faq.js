(function () {
    "use strict";

    $(document).ready(function () {
        $(".faq-question a").click(function(e) {
            e.preventDefault();

            $(this).parent().next(".faq-answer").toggleClass("invisible");
        });
    });
})();