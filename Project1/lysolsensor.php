<?php

// Lysol Bottle Sensor
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $hssensor = $_GET["lysolsensor"];
  extract($_GET);
  $obj = json_decode($_GET["lysolsensor"], false);
  // print_r($obj);

  $data = '{"status":false, "type":"", "msg":""}';
  $json = json_encode($data);

  sleep (5);
  if ($obj->lysol == false) {
      $str = "Class " . $obj->class . " : \n " . $obj->type;
      $json = '{"status":true, "type": '.json_encode($str).', "msg":"lysol Sensor alert"}';
  } 
  
  echo $json;
}
