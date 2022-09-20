<?php
$conn = mysqli_connect("172.17.0.2", "root", "root@123", "covid");
 
// Attempt insert query execution
$sql = "INSERT INTO covidreport (class, person, id, facemask, faceshield, hsstatus, lysol, deskstatus) VALUES (1, 'Instructor', 1, true, true, true, true, true)";
// $sql = "select count(*) from covidreport where class=1 and person='student'";
if(mysqli_query($conn, $sql)){

    // $row = mysqli_fetch_array($result);
    // echo $row['count(*)'];
    echo "Records inserted successfully.";

    // mysqli_free_result($result);
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// select count(*) from covidreport where person='student';
// select count(*) from covidreport where person='instructor';

// select count(*) from covidreport where class=1 and person='student';

mysqli_close($conn);
?>