<?php
include_once "./connetDB.php";

$id = $_REQUEST["id"];

$sql = "DELETE FROM cart WHERE comid =$id";
$result = mysqli_query($db,$sql);

if($result) {
    echo 'yes';//删除成功
}else {
    echo 'no';//删除失败
}

?>