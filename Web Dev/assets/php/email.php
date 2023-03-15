<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/main.css">
</head>
<body>
    <?php
    if(!empty($_POST["send"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $toEmail = "gmatthews2787@gmail.com";

        $mailHeaders = "Name: " . $name . 
        "\r\n Email: " . $email . 
        "r\n\ Message: " . $message .;

        if(mail($toEmail, $name, $mailHeaders)){
            $message = "Your info has been submitted and received. Thank you"

        }


    }
    ?>
    <main>
        <p>send Email</p>
        <form method="POST" name="./assets/php/email.php">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" >
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" >
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <!-- <button type="submit">Submit</button> -->
            <input type="submit" name="send" value="Ssus">
            <?php if(!empty($message)){ echo $message;
                 } ?>
          </form>
    </main>
</body>
</html>