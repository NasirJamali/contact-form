<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Example: Send email
$to = 'nasirjamali789@gmail.com';
$subject = 'Contact Form Submission';
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$mailBody = "Name: $name\nEmail: $email\n\n$message";

// Use mail() function to send the email
mail($to, $subject, $mailBody, $headers);

// You can return a response to the JavaScript if needed
echo json_encode(['success' => true]);
?>
