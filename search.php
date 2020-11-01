<?php


ini_set('display_errors', 'On');
error_reporting(E_ALL);

$executionStartTime = microtime(true);
include("server.php");

header('Content-Type: application/json; charset=UTF-8');
	//$searchTxt = $_POST['searchText']; 

	//$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

    }	
    $searchTxt=$_POST['searchTxt'];
    //if(isset($_POST['search'])){
        if($searchTxt!== ""){
            //$query="SELECT * FROM data WHERE id="$searchTxt";
        
    
	$query = "SELECT p.lastName, p.firstName, p.jobTitle, p.email, d.name as department, l.name as location FROM personnel p LEFT JOIN department d ON (d.id = p.departmentID) LEFT JOIN location l ON (l.id = d.locationID) WHERE p.firstName='$searchTxt' OR p.lastName='$searchTxt' OR p.jobTitle='$searchTxt' OR p.email='$searchTxt' OR d.name='$searchTxt' OR l.name='$searchTxt'";
	//$query = "SELECT * FROM `personnel` LEFT JOIN department ON (id = locationID)";

	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
   
   	$data = [];

	while ($row = mysqli_fetch_assoc($result)) {

		array_push($data, $row);

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $data;

	mysqli_close($conn);

    echo json_encode($output); 
//}
};

?>






