<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method:GET');
header("Access-Control-Allow-Header:X-Requested-With");

$con = mysqli_connect("localhost","root","","testdb");
if($con!=null){
    $query="select * from Product";
    $result = mysqli_query($con,$query);
    $dataArray = array();

    while($row =  mysqli_fetch_assoc($result)){
        $dataArray[] = $row;
    }
    echo json_encode(['getResult'=>$dataArray]);
}
?>
