<?php
$db = mysqli_connect("127.0.0.1","root","","OKBUY");

$phone = $_REQUEST["phone"];
$password = $_REQUEST["password"];

# 核心逻辑：
# (1) 先去数据库中检查是否存在指定用户名对应的数据
#    [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
#    [2] 如果存在，那么就继续检查密码
#        [1] 如果密码不正确，那么就返回错误的提示信息(对不起，您的密码不正确！)
#        [2] 如果密码正确，那么就返回登录成功。

$sql =  "SELECT * FROM user WHERE phone='$phone'";
$result = mysqli_query($db,$sql);

$data = array("status"=>"","data"=>array("msg"=>""));
if(mysqli_num_rows($result) == 0){
    // [1] 如果不存在，返回错误的提示信息(该用户名不存在!)
    $data["status"] = "error";
    $data["data"]["msg"] = "登录失败，用户名不存在";
}else{
    //如果存在，进行下一步验证
    $sql2 =  "SELECT * FROM user WHERE phone='$phone'";
    $result = mysqli_query($db,$sql2);
    $res = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $res = $res[0];
    $pwd = $res["password"];

    if($password !=  $pwd)
    {
    # (2-2-1) 密码不正确，那么就返回数据(登录失败，密码错误)
    $data["status"] = "error";
    $data["data"]["msg"] = "登录失败，密码不正确！！！";
    }else{
    # (2-2-2) 密码正确，那么就返回数据(登录成功)
    $userId = $res["id"];
    $data["status"] = "success";
    $data["data"]["msg"] = "恭喜你，登录成功";
    $data["data"]["userId"] = $userId;
    $data["data"]["password"] = $password;
    $data["data"]["username"] = $phone;
  }
}
echo json_encode($data,true);
?>