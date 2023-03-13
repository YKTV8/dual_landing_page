<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "gmatthews2787@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have mail from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("location: email.php?mailsend")
}