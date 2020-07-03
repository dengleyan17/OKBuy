<?php
// 1、连接数据库
include_once "./connetDB.php";
// 2、获取页码数量
$size = 16;

// 页码数量 = 商品的总数 / $size
$sql = "SELECT * FROM mainlist";
$result = mysqli_query($db,$sql);

$total = mysqli_num_rows($result);

/* 计算页码数量 */
$num = ceil($total / $size);

echo $num;
?>