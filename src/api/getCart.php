<?php
header("Content-Type: text/html;charset=utf-8");
/* 1、连接数据库 */
include_once "./connetDB.php";
mysqli_query($db,'SET NAMES utf8');
mysqli_set_charset($db,'utf8');

$user_id = $_REQUEST["userid"];

// 多表查询
$sql = "SELECT mainlist.*,mainlist.name,mainlist.src,mainlist.discount,mainlist.price,mainlist.costprice,mainlist.size,cart.num,cart.comid FROM mainlist , cart WHERE cart.comid = mainlist.comid AND id=$user_id";

$result = mysqli_query($db,$sql);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);


echo json_encode($data,true);

?>