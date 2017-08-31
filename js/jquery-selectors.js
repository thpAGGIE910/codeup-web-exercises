(function () {
    "use strict";

    $(document).ready(function () {
        // ID Selector Exercises
        // alert($("#article-1-title").html());
        // alert($("#username").html());
        // var $articles = $("#article-1");
        // console.log($articles);

        // Class Selector Exercises
        // $(".codeup").css("border", "1px solid red");
        // $(".codeup:nth-child(3)").css("border", "none");

        // Element Selectors Exercises
        // $("li").css("font-size", "20px");
        // $("h1").css("background-color", "yellow");
        // $("p").css("background-color", "yellow");
        // $("li").css("background-color", "yellow");
        // alert($('h1').html());

        // Multiple Selectors Exercise
        $("li, h1, p").css("background-color", "yellow");
    });
})();