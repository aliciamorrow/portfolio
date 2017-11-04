<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $recipient = 'alicia.morrow11@gmail.com';
  $message = $_POST['message'];
  $formcontent = "From: $name \n Message: $message";
  $okMessage = 'Success';
  $errorMessage = 'Failure';
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "db1";

  if (!$_POST['subject']) {
    $subject = 'New message from contact form';
  } else {
    $subject = $_POST['subject'];
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

  $headers = "From :" . $email;
  mail($recipient,$subject,$message,$headers);
?>
