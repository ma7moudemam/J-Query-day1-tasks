$(document).ready(function() {

    // 1- change background color for all p and li elements (using one selector).
    $("p,li").css("background-color", "red");
    //  2- set border to "3px solid green" for all elements having class a
    $(".a").css("border", "3px solid green");
    //  3- change imgages borders , width and height 
    $("img").css("border", "3px solid blue").css("height", "150px").css("width", "200px");
    //4- choose all paragraphs that are direct child for div then change their color and background color
    $("div > p").css("background-color", "green");
    // 5- change color for anchors starts with http keyword 
    $("a[href^=http]").css("color", "brown");
    //6- choose first row in the page and change its background color
    $("table:first tr:first").css("background-color", "red");
    //7- choose first row from each table and change it’s background color to gray
    $("table").children().children("tr").first().css("background-color", "gray");
    // 8- Select all odd li's in each list on page and change their font family and size
    $("li:odd").css("font-size", "22px");
    // 9- find all h3 tags after images on page and change their color to green
    $("img").nextAll("h3").css("color", "green");
});