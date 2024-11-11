document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const topicInput = document.getElementById("topic");
    
    form.addEventListener("submit", function (event) {
    // Initialize an array to store error messages
    const errors = [];
    // Validation for firstName (minimum length of 2 characters)
    if (firstNameInput.value.length < 3) {
        errors.push("First Name must be at least 2 characters long.");
    }
    
    // Validation for lastName (minimum length of 2 characters)
    if (lastNameInput.value.length < 3) {
        errors.push("Last Name must be at least 2 characters long.");
    }
    
    // Validation for email (must be a valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errors.push("Please enter a valid email address.");
    }
    
    // Validation for password (minimum length of 4 characters)
    if (topicInput.value.length < 4) {
        errors.push("Topic must be at least 4 characters long.");
    }
    
    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
        event.preventDefault(); // Prevent form submission
        alert(errors.join("\n")); // Display error messages in an alert
        }
    });
})