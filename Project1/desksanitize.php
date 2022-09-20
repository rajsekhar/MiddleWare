<?php

// Mask Sensor
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $hssensor = $_GET["desksanitize"];
  extract($_GET);
  $obj = json_decode($_GET["desksanitize"], false);
  // print_r($obj);

  $data = '{"status":false, "type":"", "msg":""}';
  $json = json_encode($data);

  sleep (5);
  if ($obj->desk == false) {
      $str = "Class " . $obj->class . " : \n " . $obj->type;
      $json = '{"status":true, "type": '.json_encode($str).', "msg":"desk Sensor alert"}';
  } 
  
  echo $json;
}
