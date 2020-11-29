<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
$db=mysqli_connect("localhost","root","","contacts");
if(!$db){
	die("failed to connect to database".mysqli_connect_error());
}
$recieved_data=json_decode(file_get_contents("php://input"),true);
if($recieved_data["action"]=='getcontacts'){
$sql="SELECT* FROM `usercontacts`";
$result=$db->query($sql);
if(!$result){
	die("query is invalid");
}
$response=array();
while($row=$result->fetch_array()){
	$response[]=$row;
}
echo json_encode($response);
}
if($recieved_data["action"]=='deletecontact'){
	$id=$recieved_data["id"];
$sql="DELETE FROM `usercontacts` WHERE `id`=$id";
	$result=$db->query($sql);
	if(!$result){
		die("query is invalid");
	}
}
if($recieved_data["action"]=='addcontact'){
	//$id=$recieved_data["new"]["id"]
	$name=$recieved_data["contact"]["name"];
	$email=$recieved_data["contact"]["email"];
	$phone=$recieved_data["contact"]["phone"];
    $sql="INSERT INTO `usercontacts` SET `name`='{$name}',`email`='{$email}',`phone`='{$phone}'";
	$result=$db->query($sql);
	if(!$result){
		die("query is invalid");
	}
}
if($recieved_data["action"]=='update'){
	$name=$recieved_data["arguement"]["name"];
	$email=$recieved_data["arguement"]["email"];
	$phone=$recieved_data["arguement"]["phone"];
	$id=$recieved_data["arguement"]["id"];
	$sql="UPDATE `usercontacts` SET `name`='{$name}',`email`='{$email}',`phone`='{$phone}' WHERE `id`='{$id}'";
	$result=$db->query($sql);
	if(!$result){
		die("query is invalid");
	}
}
?>