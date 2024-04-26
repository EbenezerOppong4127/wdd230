// getDates.js

document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Get last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = "Last modification: " + lastModifiedDate;
});
