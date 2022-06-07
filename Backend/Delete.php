<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header("content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");



$con = mysqli_connect("localhost","root","","testdb");
if($con!=null){
    // $Id= intval
    $Id=file_get_contents('php://input');

    $query = "Delete from Product where Id = $Id";
    $result = mysqli_query($con,$query);
    if($result){
        echo json_encode(['result'=>"Delete"]);
    }
    else{
        echo json_encode(['result'=>"not Delete"]);
    }
}


?>
