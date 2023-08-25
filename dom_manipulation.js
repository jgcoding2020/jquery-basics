$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Select the element with the ID 'myElement'
    var $myElement = $("#myElement");

    // Select all list items within the 'myList' element
    var $listItems = $("#myList li");

    // Change the text content and background color of 'myElement' when the button is clicked
    $("#changeContent").click(function () {
        $myElement.text("Text changed by jQuery!").css("background-color", "lightblue");
    });

    // Add a new list item when the button is clicked
    $("#addListItem").click(function () {
        var newItem = $("<li>New item</li>");
        $listItems.last().after(newItem);
    });

    // Remove the last list item when the button is clicked
    $("#removeListItem").click(function () {
        $listItems.last().remove();
    });

    // Add a click event handler to each list item to change its text when clicked
    $listItems.click(function () {
        var $this = $(this);
        $this.text("Clicked: " + $this.text());
    });
});
