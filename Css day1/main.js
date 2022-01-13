$(document).ready(function() {
    $("div").on("click", function() {
        let color = $(this).css("background-color");

        $("span").text(color).css("color", color);
    });
})