<<?php


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // The request is using the POST method
  if ($uri[2] == "teacher") {
    echo "Teacher";
  } else if ($uri[2] == "student") {
    echo "Student";
  } else {
    echo "invalid POST request";
  }

}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // The request is using the POST method
  if ($uri[2] == "teacher") {
    echo "Teacher";
  } else if ($uri[2] == "student") {
    echo "Student";
  } else {
    echo "invalid GET request";
  }
}

// if (isset($_GET['teacher']) && $_GET['teacher']!="") {
//   $response = "POST 1 Teacher";
//   $json_response = json_encode($response);
// 	echo $json_response;
// }

// if (isset($_POST['student']) && $_POST['student']!="") {
//   $response = "POST 2 Teacher";
//   $json_response = json_encode($response);
// 	echo $json_response;
// }

// if (isset($_POST['teacher']) && $_POST['teacher']!="") {
//   $response = "POST 3 Teacher";
//   $json_response = json_encode($response);
// 	echo $json_response;
// }

?>