$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Select the paragraph element by its ID
    var $myParagraph = $("#myParagraph");

    // Chain multiple jQuery methods to modify the paragraph
    $myParagraph
        .css("color", "blue")             // Change text color to blue
        .slideUp(1000)                    // Slide up the paragraph over 1 second
        .delay(1000)                      // Delay for 1 second
        .slideDown(1000)                  // Slide down the paragraph over 1 second
        .html("Text changed by chaining")  // Change the HTML content
        .addClass("highlight");           // Add a CSS class
});
