<?php

header("Content-Type: application/json; charset=UTF-8");

$instructor = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $jsonData = stripslashes(html_entity_decode($_REQUEST["json"]));
  $obj = json_decode($_REQUEST["json"], false);

  // print_r($obj);

  $conn = mysqli_connect("172.17.0.2", "root", "root@123", "covid");

  $sql = "INSERT INTO covidreport (class, person, id, recid, facemask, faceshield, hsstatus, lysol, deskstatus) VALUES ($obj->class, '$obj->type',$obj->id, $obj->recid ,$obj->faceMask, $obj->faceSheild, $obj->handSanitizer, $obj->lysol, $obj->desk)";
      
  // Attempt insert query execution
  if(mysqli_query($conn, $sql)){
    echo "Records inserted successfully.";
  } else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
  }
  
  mysqli_close($conn);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') { 

  $obj = json_decode($_GET["json"], false);
  // print_r($obj);
}
