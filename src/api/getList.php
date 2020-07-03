<?php
header("Content-Type: text/html;charset=utf-8");
// 1、连接数据库
include_once "./connetDB.php";
// mysqli_query($db,"SET NAMES utf8");
mysqli_query($db,'SET NAMES utf8');
mysqli_set_charset($db,'utf8');

$page = $_REQUEST["page"];
$sort = $_REQUEST["sort"];

$limit = $page * 16;

if($sort == "default"){
    $sql = "SELECT * FROM mainlist Order BY comid LIMIT $limit,16";
  }elseif($sort == "price_asc"){
    $sql = "SELECT * FROM mainlist Order BY price ASC LIMIT $limit ,16";
  } elseif ($sort == "price_desc") {
    $sql = "SELECT * FROM mainlist Order BY price DESC LIMIT $limit,16";
  }

  $result = mysqli_query($db,$sql);
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  
//   var_dump($data);
  /* 3、把数据转换为JSON数据返回 */
  echo json_encode($data,true);

?>