<?php
$jsonobj = '{ "instructor": { "faceSheild":"true", "faceMask": "true", "lysol": "true", "desk":"true", "handSanitizer": "true"}}';
$logdata = json_decode($jsonobj, true);
// syslog(1, $logdata);

print_r($logdata);

?> 
