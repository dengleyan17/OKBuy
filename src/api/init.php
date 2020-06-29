<?php
/* 该文件的作用是：创建一个数据库(OKBUY),创建一张表(user),设计字段 */
/* user表 */
/* id  phone password user_date */

/* 该文件的作用是创建数据库 */
$db = mysqli_connect("127.0.0.1", "root", "");

if (!$db) {
    die('连接错误: ' . mysqli_error($db));
}
  
echo '连接成功<br />';

$sql = 'CREATE DATABASE OKBUY';

$retval = mysqli_query($db, $sql);

if (!$retval) {
    die('创建数据库失败: ' . mysqli_error($db));
}
echo "数据库JKWDEMO创建成功\n";

/* ********************** */

mysqli_select_db($db, 'OKBUY');

/* 创建一张表(user) */
$sql = "CREATE TABLE user( " .
  "id INT NOT NULL AUTO_INCREMENT, " .
  "phone VARCHAR(100) NOT NULL, " .
  "password VARCHAR(40) NOT NULL, " .
  "user_date DATE, " .
  "PRIMARY KEY ( id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";

$retval = mysqli_query($db, $sql);

if (!$retval) {
  die('数据表创建失败: ' . mysqli_error($conn));
}
echo "数据表创建成功\n";
?>