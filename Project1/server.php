<?php

header("Content-Type: application/json; charset=UTF-8");

$instructor = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $obj = json_decode($_POST["json"], false);

  $conn = mysqli_connect("172.17.0.3", "root", "root@123", "covid");
  $getCount = "select count(*) from covidreport where class=$obj->class and person= $obj->type";
  
  $count  = 0;
  if($result = mysqli_query($conn, $getCount)){
    $row = mysqli_fetch_array($result);
    $count = $row['count(*)'];
    mysqli_free_result($result);
  }
  
   if ( ($obj->type == 'Instructor') ) {
 
    if ($count == 0) {

      $sql = "INSERT INTO covidreport (class, person, facemask, faceshield, hsstatus, lysol, deskstatus) 
              VALUES ($obj->class, $obj->type, $jsonObj->faceMask, $jsonObj->faceSheild, $jsonObj->handSanitizer, $jsonObj->lysol, $jsonObj->desk)";
      
      // Attempt insert query execution
      if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
      } else{
          echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
      }
    } else {
      return;
    }
   }

   if ( ($obj->type == 'Student') ) {
    if ($count < 5) {
      $sql = "INSERT INTO covidreport (class, person, facemask, faceshield, hsstatus, lysol, deskstatus) 
      VALUES ($obj->class, $obj->type, $jsonObj->faceMask, $jsonObj->faceSheild, $jsonObj->handSanitizer, $jsonObj->lysol, $jsonObj->desk)";

      // Attempt insert query execution
      if(mysqli_query($conn, $sql)){
        echo "Records inserted successfully.";
      } else{
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
      }
    } else {
      return ;
    }
   }

  mysqli_close($conn);


  // print_r($obj);

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

  $obj = json_decode($_GET["json"], false);
  // print_r($obj);

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
