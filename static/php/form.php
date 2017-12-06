<?php
    $nom    =   htmlentities($_POST["nom"], ENT_QUOTES, "UTF-8");
    $prenom    =   htmlentities($_POST["prenom"], ENT_QUOTES, "UTF-8");
    $mail    =   htmlentities($_POST["email"],ENT_QUOTES, "UTF-8");
    $tel    =   htmlentities($_POST["tel"],ENT_QUOTES, "UTF-8");
    $depart    =   htmlentities($_POST["depart"],ENT_QUOTES, "UTF-8");
    $time    =   htmlentities($_POST["heure"],ENT_QUOTES, "UTF-8");
    $arrive    =   htmlentities($_POST["arrive"],ENT_QUOTES, "UTF-8");
    $commentaire    =   htmlentities($_POST["comment"],ENT_QUOTES, "UTF-8");

    print_r($nom);
    print_r($prenom);
    print_r($mail);
    print_r($tel);
    print_r($depart);
    print_r($arrive);
    print_r($time);
    print_r($commentaire);

    if(!empty($nom) && !empty($prenom)) {
        $To = 'lastminute.taximoto@gmail.com'.','.$mail;
        $Sujet =  utf8_decode('Votre reservation '.$nom);
        $Header = "From:".$nom."<".$mail.">"."\n";
        $messages = utf8_decode("Plex Taxi Moto.")."\r\n"."\r\n";
        $messages .= utf8_decode("Départ de : ".$depart."."). "\r\n";
        $messages .= utf8_decode("Heure de départ : ".$time."."). "\r\n";
        $messages .= utf8_decode("Arrivé a : ".$arrive."."). "\r\n";
        $messages .= utf8_decode("Votre n° de tel : ".$tel."."). "\r\n";
        $messages .= utf8_decode("Votre commentaire : ".$commentaire.".");

        if(mail($To, $Sujet, $messages, $Header)){
            echo 'Envoie du message';
            unset($nom);
            unset($email);
            unset($message);
        }
        else{
            echo 'Une erreur est survenue';
        }
    }
?>