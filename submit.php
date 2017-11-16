<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $recipient = 'contact@aliciamorrow.me';
  $message = $_POST['message'];
  $formcontent = "From: $name \n Message: $message";
  $subject = $_POST['subject'];

  if(strlen($subject) == 0)
  {
    $subject = 'New message from contact form';
  }

  $okMessage = 'Success';
  $errorMessage = 'Failure';

  $servername = "localhost";
  $username = "aliciao5_main";
  $password = "dO\$m4YT&Kn?|*Wf";
  $dbname = "aliciao5_db1";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $statement = $conn->prepare("INSERT INTO `user` (`name`, `email`) VALUES (?, ?)");
  $statement->bind_param('ss', $name, $email);
  $statement->execute();
  $statement->close();

  $conn->close();

  $headers = "From: " . $email;
  if ($_POST['name'] && $_POST['email'] && $_POST['message']) {
    mail($recipient,$subject,$formcontent,$headers);
    echo json_encode("Email sent!");
  }
?>
