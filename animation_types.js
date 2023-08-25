$(document).ready(function () {
    // Wait for the document to be fully loaded

    var $fadeBox = $("#fadeBox");
    var $slideBox = $("#slideBox");
    var $resizeBox = $("#resizeBox");

    // Fading Animation
    $("#fadeButton").click(function () {
        $fadeBox.fadeToggle(1000); // Fade in/out over 1 second
    });

    // Sliding Animation
    $("#slideButton").click(function () {
        $slideBox.slideToggle(1000); // Slide up/down over 1 second
    });

    // Resizing Animation
    $("#resizeButton").click(function () {
        $resizeBox.animate({
            width: "200px",
            height: "200px"
        }, 1000); // Resize over 1 second
    });
});
