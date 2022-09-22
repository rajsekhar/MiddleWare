<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$conn = mysqli_connect("172.17.0.2", "root", "root@123", "covid");
 
// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
echo 'Connected successfully';

$sql = "CREATE TABLE covidreport (
    class INT,
    person VARCHAR(30) NOT NULL,
    id INT,
    recid INT,
    facemask BOOLEAN,
    faceshield BOOLEAN,
    hsstatus BOOLEAN,
    lysol BOOLEAN,
    deskstatus BOOLEAN
)";

if(mysqli_query($conn, $sql)){
    echo "Table created successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 
mysqli_close($conn);
?>