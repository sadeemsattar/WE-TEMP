<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header("content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");



$con = mysqli_connect("localhost","root","d283a38c","testdb");
if($con!=null){
    $data = json_decode(file_get_contents('php://input'));
   
   
    
    $query = "UPDATE Product SET Title ='$data->Title', Quantity='$data->Quantity', Size='$data->Size', Price='$data->Price' WHERE Id = '$data->Id'";
    $result = mysqli_query($con,$query);
    if($result){
        
        echo json_encode(['Pass'=>$result]);
    }
    else{
        echo json_encode(['result'=>$result]);
    }
}


?>