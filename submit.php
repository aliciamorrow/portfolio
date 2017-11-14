<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $recipient = 'contact@aliciamorrow.me';
  $message = $_POST['message'];
  $formcontent = "From: $name \n Message: $message";
  $okMessage = 'Success';
  $errorMessage = 'Failure';
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "aliciao5_db1";

  if (!empty(!$_POST['subject'])) {
    $subject = $_POST['subject'];
  } else {
    $subject = 'New message from contact form';
  }

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $sql ="INSERT INTO `user` (`name`, `email`) VALUES ('$name', '$email')";
  if($conn->query($sql) === TRUE) {
    echo "Added to db1";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();

  $headers = "From: " . $name . " at " . $email;
  if ($_POST['name'] && $_POST['email'] && $_POST['message']) {
    mail($recipient,$subject,$message,$headers);
    echo "Email sent!";
  }
?>
