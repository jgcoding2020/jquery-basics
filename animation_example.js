$(document).ready(function () {
    // Wait for the document to be fully loaded

    var $animatedBox = $("#animatedBox");

    // Add a click event handler to the button
    $("#animateButton").click(function () {
        // Use jQuery animations to create effects
        $animatedBox.slideDown(1000).fadeIn(1000).css("background-color", "blue");
    });
});