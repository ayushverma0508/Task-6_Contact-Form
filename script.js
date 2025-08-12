document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;
    let nameField = document.getElementById('name');
    let emailField = document.getElementById('email');
    let messageField = document.getElementById('message');

    clearErrors();

    if (nameField.value.trim() === "") {
        showError(nameField, "Name is required");
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
        showError(emailField, "Email is required");
        valid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
        showError(emailField, "Enter a valid email");
        valid = false;
    }

    if (messageField.value.trim() === "") {
        showError(messageField, "Message cannot be empty");
        valid = false;
    }

    if (valid) {
        document.getElementById('successMessage').textContent = "Form submitted successfully!";
        document.getElementById('contactForm').reset();
    }
});

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = "");
    document.getElementById('successMessage').textContent = "";
}