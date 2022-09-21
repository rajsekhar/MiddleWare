<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$conn = mysqli_connect("172.17.0.2", "root", "root@123");
 
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

mysqli_close($conn);
?>