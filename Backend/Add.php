<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header("content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");



$con = mysqli_connect("localhost","root","d283a38c","testdb");
if($con!=null){

    // data get from frontend is in json.stringify format 
    // thats why need to decode the data
    $item = json_decode(file_get_contents('php://input'));

    $query = "insert into Product (Title,Quantity,Size,Price) values('$item->Title','$item->Quantity','$item->Size','$item->Price')";
    $result = mysqli_query($con,$query);
    if($result){
        // send resopense
        echo json_encode(['result'=>"ok"]);
    }
    else{
        echo json_encode(['result'=>"not ok"]);
    }
}


?>