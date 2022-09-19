<?php

// Mask Sensor
header("Content-Type: application/json; charset=UTF-8");

$instructor = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $obj = json_decode($_POST["json"], false);
  // print_r($obj);

  if ( ($obj->type == 'Instructor') || strstr($obj->type, 'Student')) {
    $jsonObj = $obj;                                                                                                                                                                                                                                                                             
    sleep (5);
    if ($jsonObj->faceSheild == false || $jsonObj->faceMask == false) {
      echo "$obj->type is not following COVID-19 precautions";
    } else{
      echo "$obj->type thanks for following COVID-19 precautions";
    }
  } else {
    echo "Invalid Requset";
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $masksensor = $_GET["masksensor"];

  $obj = json_decode($_GET["json"], false);
  // print_r($obj);

  if ( ($obj->type == 'Instructor') || strstr($obj->type, 'Student')) {
    $jsonObj = $obj;
    sleep (5);
    if ($jsonObj->faceSheild == false || $jsonObj->faceMask == false) {
      echo "$obj->type is not following COVID-19 precautions";
    } else{
      echo "$obj->type thanks for following COVID-19 precautions";
    }
  } else {
    echo "Invalid Requset";
  }
}
