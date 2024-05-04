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