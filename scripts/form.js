
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

