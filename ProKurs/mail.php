<?php
$recepient = "elena_zvonenko@mail.ru";
$sitename = "ProKurs";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$city = trim($_POST["city"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nГород: $city";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
