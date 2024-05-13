// getDates.js

document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Get last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = "Last modification: " + lastModifiedDate;
});



    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainElement = document.querySelector('header');

    darkModeToggle.addEventListener('click', () => {
    mainElement.classList.toggle('dark-mode');
});
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

    // Function to update the page visit counter
    function updateVisitCounter() {
    // Check if 'visitCount' exists in localStorage
    if(localStorage.getItem('visitCount')) {
    // If exists, get the count from localStorage and increment it
    let count = parseInt(localStorage.getItem('visitCount'));
    count++;
    localStorage.setItem('visitCount', count); // Update the count in localStorage
    $('#visitCount').text(count); // Update the counter display using jQuery
} else {
    // If 'visitCount' does not exist in localStorage, initialize it to 1
    localStorage.setItem('visitCount', 1);
    $('#visitCount').text(1); // Update the counter display using jQuery
}
}

    // Call the function to update the counter when the page loads
    $(document).ready(function() {
    updateVisitCounter();
});
