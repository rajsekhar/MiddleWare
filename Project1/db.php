<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$conn = mysqli_connect("172.17.0.3", "root", "root@123");
 
// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
echo 'Connected successfully';

$sql = 'CREATE Database covid';

$retval = mysqli_query( $conn, $sql );
if(! $retval ) {
      die('Could not create database: ' . mysql_error());
      echo 'could not create database - database exist';
      return;
}


// $sql = "CREATE TABLE covidreport (
//     class INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     person VARCHAR(30) NOT NULL,
//     facemask BOOLEAN,
//     faceshield BOOLEAN,
//     hsstatus BOOLEAN,
//     lysol BOOLEAN,
//     deskstatus BOOLEAN
// )";

// if(mysqli_query($conn, $sql)){
//     echo "Table created successfully.";
// } else{
//     echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
// }
 
// Attempt insert query execution
// $sql = "INSERT INTO covidreport (class, person, facemask, faceshield, hsstatus, lysol, deskstatus) VALUES (1, 'student #1', true, false, true, true, true)";
// if(mysqli_query($conn, $sql)){
//     echo "Records inserted successfully.";
// } else{
//     echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
// }


// Print host information
// echo "Connect Successfully. Host info: " . mysqli_get_host_info($conn);
mysqli_close($conn);
?>