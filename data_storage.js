$(document).ready(function () {
    // Wait for the document to be fully loaded

    // Local Storage Demo
    $("#localStorageButton").click(function () {
        // Store data in Local Storage
        localStorage.setItem("favoriteColor", "blue");

        // Retrieve data from Local Storage
        var favoriteColor = localStorage.getItem("favoriteColor");
        $("#localStorageResult").text("Favorite color (Local Storage): " + favoriteColor);
    });

    // Session Storage Demo
    $("#sessionStorageButton").click(function () {
        // Store data in Session Storage
        sessionStorage.setItem("userName", "John");

        // Retrieve data from Session Storage
        var userName = sessionStorage.getItem("userName");
        $("#sessionStorageResult").text("User name (Session Storage): " + userName);
    });

    // Cookies Demo
    $("#cookiesButton").click(function () {
        // Set a cookie
        document.cookie = "city=NewYork; expires=Thu, 31 Dec 2025 23:59:59 GMT";

        // Retrieve cookies
        var cookies = document.cookie;
        $("#cookiesResult").text("Cookies: " + cookies);
    });
});
