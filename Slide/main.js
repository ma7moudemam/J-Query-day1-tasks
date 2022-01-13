$(document).ready(function() {

    $(".moveLeft").on("click", function() {

        let myDiv = $("div");
        let position = myDiv.position();
        let newPosition = position.left - 20;
        $("div").css("left", newPosition);
        $("div").offset("left", newPosition);
    });

    $(".moveright").on("click", function() {

        let myDiv = $("div");
        let position = myDiv.position();
        let newPosition = position.left + 10;
        $("div").css("left", newPosition);
        $("div").offset("left", newPosition);
    });

    $(".slideup").on("click", function() {
        $("div").slideUp();
    })

    $(".slidedown").on("click", function() {
        $("div").slideDown();
    })

    $(".slidetoggle").on("click", function() {
        $("div").slideToggle();
    })
});