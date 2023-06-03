<?php


use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 

require "vendor/autoload.php";
// require "../../vendor/autoload.php";

class MailView{

    private $body;
    private $to;
    private $subject;

    /** Required by me **/
    // private $FirstName;
    // private $Lastname;
    // private $Email;
    // Private $PhoneNumber;
    // private $body;

    public function __construct(){
        // $value = $to;
        // $this->body = $message;
        // $this->to = $to;
        // $this->subject = $subject;

    }

    public function sendMail(){

        $mail = new PHPMailer();

        $mail->SMTPDebug = SMTP::DEBUG_SERVER;

        $mail->isSMTP();

        $mail->SMTPAuth = true;
        $mail->Username = 'daudabdulrahman22@gmail.com';
        $mail->Password = "ukjemlyiblllochi";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Host = 'smtp.gmail.com';
        $mail->isHTML(true);
        
        
        $mail ->setFrom('daudabdulrahman22@gmail.com','Abdul');
        // $mail->addAddress('hanncock98@gmail.com','hanncock');
        $mail->addAddress('hanncock98@gmail.com','hanncock');
        

        $mail->Subject = "test mailer";
        $mail->Body = "Username: ". "hi this is a test  mail";

        if(!$mail->send()){
            return ("Mailer Error :". $mail->ErrorInfo);
        }else{
            return ('The email message was sent');
        }

    }
    
}