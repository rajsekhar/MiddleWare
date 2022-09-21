<?php
$conn = mysqli_connect("172.17.0.2", "root", "root@123", "covid");
 
// Attempt insert query execution
//$sql = "INSERT INTO covidreport (class, person, id, facemask, faceshield, hsstatus, lysol, deskstatus) VALUES (1, 'Instructor', 1, true, true, true, true, true)";

// $sql = "select count(*) from covidreport where class=1 and person='Student' and id=1";
// $sql = "select count(*) from covidreport where class=1 and person='student'";
$sql = "select *from covidreport where class=1 and person='Student' and id=2;";
if($result = mysqli_query($conn, $sql)){

    $row = mysqli_fetch_array($result, MYSQLI_BOTH);
    

    $json = '{"class":1"type": '.json_encode($row["person"]).', "msg":"lysol Sensor alert"}';


    if (sizeof($row) > 1) {

        echo sizeof($row);
        echo $row["person"];
    }
    // $row = mysqli_fetch_array($result);
    // echo $row['count(*)'];
    mysqli_free_result($result);

    // mysqli_free_result($result);
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// select count(*) from covidreport where person='student';
// select count(*) from covidreport where person='instructor';

// select count(*) from covidreport where class=1 and person='student';

mysqli_close($conn);
?>