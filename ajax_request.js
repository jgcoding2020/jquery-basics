$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Select the button and result div by their IDs
    var $fetchButton = $("#fetchData");
    var $resultDiv = $("#result");

    // Add a click event handler to the button
    $fetchButton.click(function () {
        // Make an AJAX GET request
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1", // Mock API URL
            method: "GET",
            dataType: "json", // Expect JSON data in response
            success: function (data) {
                // Handle the success response
                $resultDiv.html("<p>Title: " + data.title + "</p><p>Body: " + data.body + "</p>");
            },
            error: function () {
                // Handle errors
                $resultDiv.text("An error occurred while fetching data.");
            }
        });
    });
});
