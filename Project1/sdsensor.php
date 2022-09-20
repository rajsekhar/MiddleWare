<?php

//Social Distancing Sensor

header("Content-Type: application/json; charset=UTF-8");

$instructor = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $obj = json_decode($_POST["json"], false);
  print_r($obj);

  if ( ($obj->type == 'Instructor') || strstr($obj->type, 'Student')) {
    $jsonObj = $obj;                                                                                                                                                                                                                                                                             
    sleep (5);
    if ($jsonObj->faceSheild == false || $jsonObj->faceMask == false || 
    $jsonObj->lysol == false ||  $jsonObj->desk == false || 
    $jsonObj->handSanitizer == false) {
      echo "$obj->type is not following COVID-19 precautions";
    } else{
      echo "$obj->type thanks for following COVID-19 precautions";
    }
  } else {
    echo "Invalid Requset";
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  $sdsensor = $_GET["sdsensor"];

  $obj = json_decode($_GET["json"], false);
  // print_r($obj);

  $conn = mysqli_connect("172.17.0.2", "root", "root@123", "covid");
  $getCount = "select count(*) from covidreport where class=$obj->class and person='$obj->type'";

  $count  = 0;
  if($result = mysqli_query($conn, $getCount)){
    $row = mysqli_fetch_array($result);
    $count = $row['count(*)'];
    mysqli_free_result($result);
  }
  
  $data = '{"status":false, "msg":"SD Sensor alert"}';
  $json = json_encode($data);
  
  if ( ($obj->type == 'Instructor') && $count > 0) {
    $json = '{"status":true, "msg":"SD Sensor alert"}';
  } else if ( ($obj->type == 'Student') && $count > 4) {
    $json = '{"status":true, "msg":"SD Sensor alert"}';
  } else {
    $json = '{"status":false, "msg":""}';
  }
  echo $json;
}
