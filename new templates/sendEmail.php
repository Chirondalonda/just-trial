<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include the PHPMailer Autoload file
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST["send"])) {
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // Set up SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'dhamuniyahitesh@gmail.com';
    $mail->Password = 'fwffveahjppwjwoa'; // Use your Gmail app password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set up sender and recipient
    $mail->setFrom('dhamuniyahitesh@gmail.com'); // Set your email address as the sender
    $mail->addAddress("hiteshdhamuniya@gmail.com"); // Set the user's entered email as the recipient
    $mail->addReplyTo("hiteshdhamuniya@gmail.com"); // Set reply-to address to user's entered email

    $mail->isHTML(true);

    // Set up email content
    $mail->Subject = $_POST["subject"];
    // $mail->Body = $_POST["email","userMessage"];
    // $mail->Body = 'Email: ' . $_POST["email"] . "\r\n\r\n" . 'Message: ' . $_POST["userMessage"];
    $mail->Body = "<body style='font-family: arial;'>"."<h3 style='display: inline;'>".'Name: '."</h3>"."<h4 style='display: inline;'>".$_POST["Name"]."</h4>"."<br><br>"."<h3 style='display: inline;'>".'Email: '."</h3>"."<h4 style='display: inline;'>" . $_POST["email"]. "<br><br>"."Phone no. : ". $_POST["phone"]."</h4>" . "<br><br>" ."<h3>" ."Message: "."</h3>" . $_POST["message"] ."</body>";


    // Send the email
    try {
        $mail->send();
        echo '<script>
            alert("Sent Successfully");
            document.location.href = "index.html";
        </script>';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}


// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';


// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // rest of your code



// // Include the PHPMailer Autoload file


// if (isset($_POST["send"])) {
//     // Retrieve user input from the form
//     // $userMessage = $_POST["userMessage"];

//     // Create a new PHPMailer instance
//     $mail = new PHPMailer(true);

//     // Set up SMTP
//     $mail->isSMTP();
//     $mail->Host = 'smtp.gmail.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = 'dhamuniyahitesh@gmail.com';
//     $mail->Password = 'fwffveahjppwjwoa';
//     $mail->SMTPSecure = 'tls';
//     $mail->Port = 587;

//     // Set up sender and recipient
//     $mail->setFrom('dhamuniyahitesh@gmail.com');
//     $mail->addAddress($_POST["email"]);

//     $mail->isHTML(true);

//     // Set up email content
//     $mail->Subject = $_POST["subject"];
//     $mail->Body = $_POST["userMessage"];

//     // Send the email

//     $mail->send();
    
//     echo '<script>
//     alert("Sent Successfully");
//     document.location.href = "text.html";
//     </script>';


    
// }

// } else {
//     echo "Invalid request method";
// }
?>
