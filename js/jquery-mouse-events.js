(function () {
    "use strict";

    $(document).ready(function () {

        function changeBackgroundColor() {
            $(this).css({
                backgroundColor: "red",
                color: "white"
            });
        }

        function resizeText() {
            $(this).css("font-size", "18px");
        }

        function changeColorHovering() {
            $(this).css("background-color", "red");
        }

        function changeColorNotHovering() {
            $(this).css("background-color", "white");
        }

        $('h1').click(changeBackgroundColor);

        $('p').dblclick(resizeText);

        $('li').hover(changeColorHovering, changeColorNotHovering);

    });
})();