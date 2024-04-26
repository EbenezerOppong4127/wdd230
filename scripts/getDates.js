// getDates.js

document.addEventListener("DOMContentLoaded", function() {
    // Get current year
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Get last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = "Last modification: " + lastModifiedDate;
});
