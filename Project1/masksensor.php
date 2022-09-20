<?php

// Mask Sensor
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $hssensor = $_GET["masksensor"];
  extract($_GET);
  $obj = json_decode($_GET["masksensor"], false);
  // print_r($obj);

  $data = '{"status":false, "type":"", "msg":""}';
  $json = json_encode($data);

  $str = "Class " . $obj->class . " : \n " . $obj->type;
  sleep (5);
  if ($obj->faceMask == false) {
    $json = '{"status":true, "type": '.json_encode($str).', "msg":"face Mask Sensor alert"}';
  } 
  
  if ($obj->faceSheild == false) {
    $json = '{"status":true, "type": '.json_encode($str).', "msg":"face Sheild Sensor alert"}';
  }

  if ($obj->faceMask == false && $obj->faceSheild == false) {
    $json = '{"status":true, "type": '.json_encode($str).', "msg":"face Mask/Sheild Sensor alert"}';
  }
   
  echo $json;
}
