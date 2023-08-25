$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Parent Element Traversal
    var $container = $("#container");
    var $parentTitle = $container.parent().find("h1");

    // Child Element Traversal
    var $listItems = $container.find("ul li");
    var $firstItem = $container.children("ul").children("li:first");
    var $lastItem = $container.children("ul").children("li:last");

    // Sibling Element Traversal
    var $highlightedDiv = $container.find(".highlight");
    var $nextSibling = $highlightedDiv.next();
    var $prevSibling = $highlightedDiv.prev();

    // Output the results
    $("#output").html("<h2>Parent Element Traversal</h2>");
    $("#output").append("<p>Parent Element (h1): " + $parentTitle.text() + "</p>");

    $("#output").append("<h2>Child Element Traversal</h2>");
    $("#output").append("<p>All List Items: " + $listItems.text() + "</p>");
    $("#output").append("<p>First List Item: " + $firstItem.text() + "</p>");
    $("#output").append("<p>Last List Item: " + $lastItem.text() + "</p>");

    $("#output").append("<h2>Sibling Element Traversal</h2>");
    $("#output").append("<p>Highlighted Div: " + $highlightedDiv.text() + "</p>");
    $("#output").append("<p>Next Sibling: " + $nextSibling.text() + "</p>");
    $("#output").append("<p>Previous Sibling: " + $prevSibling.text() + "</p>");
});
