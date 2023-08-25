$(document).ready(function () {
    // Wait for the document to be fully loaded

    var $output = $("#output");

    // Function to display response data
    function displayResponse(response) {
        $output.append("<pre>" + JSON.stringify(response, null, 2) + "</pre>");
    }

    // GET Request - Retrieve Data
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET",
        success: function (data) {
            $output.append("<h2>GET Request - Retrieve Data</h2>");
            displayResponse(data);
        }
    });

    // POST Request - Create a Resource
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: {
            title: "New Post",
            body: "This is a new post.",
            userId: 1
        },
        success: function (data) {
            $output.append("<h2>POST Request - Create a Resource</h2>");
            displayResponse(data);
        }
    });

    // PUT Request - Update a Resource
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PUT",
        data: {
            id: 1,
            title: "Updated Post",
            body: "This post has been updated.",
            userId: 1
        },
        success: function (data) {
            $output.append("<h2>PUT Request - Update a Resource</h2>");
            displayResponse(data);
        }
    });

    // DELETE Request - Delete a Resource
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "DELETE",
        success: function (data) {
            $output.append("<h2>DELETE Request - Delete a Resource</h2>");
            displayResponse(data);
        }
    });
});
