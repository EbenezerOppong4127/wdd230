
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const passwordMessage = document.getElementById('password-message');

    confirmPassword.addEventListener('input', function () {
    if (password.value !== confirmPassword.value) {
    passwordMessage.textContent = 'Passwords do not match.';
    confirmPassword.setCustomValidity('Passwords do not match.');
} else {
    passwordMessage.textContent = '';
    confirmPassword.setCustomValidity('');
}
});

    function validateEmail(event) {
        const emailField = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

        if (!emailPattern.test(emailField.value)) {
            alert('Please enter a valid email address ending with @byui.edu');
            emailField.focus();
            event.preventDefault(); // Prevent form submission
            return false;
        }

        return true; // Allow form submission
    }

    // Add event listener to form
    window.onload = function() {
        const form = document.querySelector('.custom-form');
        form.addEventListener('submit', validateEmail);
    };