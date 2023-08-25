$(document).ready(function() {
    // Wait for the document to be fully loaded

    // Click event handler
    $("#clickMe").click(function() {
        alert("Button clicked!");
    });

    // Hover event handler
    $("#hoverMe").hover(
        function() {
            $(this).text("Mouse over!");
        },
        function() {
            $(this).text("Hover Me");
        }
    );

    // Keypress event handler
    $("#keypressMe").keypress(function(event) {
        var keyPressed = event.key;
        alert("Key pressed: " + keyPressed);
    });

    // Click event handler with text change
    $("#changeMe").click(function() {
        $(this).text("Text changed by click event!");
    });
});
