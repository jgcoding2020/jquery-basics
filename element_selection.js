$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Selecting by Element Type
    $("h1").css("color", "blue"); // Selects all <h1> elements and changes their text color

    // Selecting by Class
    $(".highlight").css("font-weight", "bold"); // Selects elements with class "highlight" and adds bold styling

    // Selecting by ID
    $("#myId").text("This is selected by ID."); // Updates the text of an element with ID "myId"

    // Selecting by Descendants
    $("ul li").css("color", "green"); // Selects all <li> elements within <ul> and changes their text color

    // Selecting by Attribute
    $("input[type='text']").attr("placeholder", "Enter text"); // Selects text input elements by attribute and sets a placeholder

    // Selecting by Pseudo-class
    $("li:first-child").css("background-color", "yellow"); // Selects the first <li> element and changes its background color
});
