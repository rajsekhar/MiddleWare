<?php

// Hand Sanitizer Sensor

header("Content-Type: application/json; charset=UTF-8");

$instructor = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $obj = json_decode($_POST["json"], false);
  // print_r($obj);

  if ( ($obj->type == 'Instructor') || strstr($obj->type, 'Student')) {
    $jsonObj = $obj;                                                                                                                                                                                                                                                                             
    sleep (5);
    if ($jsonObj->handSanitizer == false) {
      echo "$obj->type is not following COVID-19 precautions";
    } else{
      echo "$obj->type thanks for following COVID-19 precautions";
    }
  } else {
    echo "Invalid Requset";
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $hssensor = $_GET["hssensor"];
  extract($_GET);
  $obj = json_decode($_GET["hssensor"], false);
  // print_r($obj);

  if ( ($obj->type == 'Instructor') || strstr($obj->type, 'Student')) {
    $jsonObj = $obj;
    sleep (5);
    if ($jsonObj->handSanitizer == false) {
      echo "$obj->type is not following COVID-19 precautions";
    } else{
      echo "$obj->type thanks for following COVID-19 precautions";
    }
  } else {
    echo "Invalid Requset";
  }
}
