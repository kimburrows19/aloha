<html>
<body>

<?php
  // check if $_SESSION['qaptcha_key'] created with AJAX exists
  if(isset($_SESSION['qaptcha_key']) && !empty($_SESSION['qaptcha_key'])){
    $myVar = $_SESSION['qaptcha_key'];
   
    // check if the random input created exists and is empty
    if(isset($_POST[''.$myVar.'']) && empty($_POST[''.$myVar.'']))
    {
      //mail can be sent
      //send email
      if (isset($_REQUEST['email'])){
      $name = $_REQUEST['name'];
      $email = $_REQUEST['email'] ;
      $phone = $_REQUEST['phone'];
      $subject = "Aloha Carpet Care Inquiry" ;
      $message = "name: " . $name ."\n"."email: " . $email."\n"."phone: " . $phone."\n"."message: ".$_REQUEST['message'] ;
      mail("ask4aloha@gmail.com", $subject,
      $message, "From:" . $email);
      }
      else
      {
        //mail can not be sent
      }
    }
  }
  unset($_SESSION['qaptcha_key']);

?>

</body>
</html> 