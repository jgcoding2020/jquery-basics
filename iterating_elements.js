$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Method 1: Using .each() to iterate over elements
    $("li").each(function (index, element) {
        $(element).text("Item " + (index + 1)); // Update the text of each <li> element
    });

    // Method 2: Using .each() with arrow function
    $("li").each((index, element) => {
        console.log("Index: " + index + ", Text: " + $(element).text()); // Log index and text
    });

    // Method 3: Using .map() to create a new array
    var newTextArray = $("li").map(function (index, element) {
        return "New Item " + (index + 1);
    }).get();
    console.log(newTextArray);

    // Method 4: Using .filter() to select specific elements
    $("li").filter(":even").css("background-color", "lightblue"); // Select even <li> elements and change their background color
});
