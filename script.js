function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
    }

    // Assuming validateForm is successful, you can proceed to submit the form data to the server.
    submitForm(name, email, message);
}

function submitForm(name, email, message) {
    // Use AJAX or another method to send the form data to the server
    // The server-side script (e.g., in PHP) will handle sending the email
    // Example using fetch API:
    fetch('processForm.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('confirmation-message').innerText = 'Form submitted successfully';
        // Optionally, you can reset the form after successful submission
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
    });
}
