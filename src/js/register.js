/* 分析： */
/* (1) 表单验证 */
/* (2) 图形验证码 */
/* (3) 点击注册 */


// 表单验证
$(()=>{
    $("#phone").val("17620926553");
    $("#password").val("123456");

    let options = {
        "phone":{
            reg:`/^1[3-9]\\d{9}$/.test(val)`,
            msg:`手机号码不规范！`
        },
        "password":{
            reg:`/^[a-zA-Z0-9]{6,9}$/.test(val)`,
            msg:`密码设置不规范！`
        },
        "imageCode":{
            reg:`imgCodeTarget == val`,
            msg:`输入的验证码有误，请重试！`
        }
    }

    $(".login-right input").blur(function(){

        let action = this.id;
        let val = $.trim($(this).val());
        // console.log(val);
        // console.log($(this).parent().next())

        if(eval(options[action].reg)){
            $(this).parent().next().text("");
            $(this).parent().next().removeClass("active");
        }else{
            $(this).parent().next().text(options[action].msg);
            $(this).parent().next().addClass("active");
        }
    });

    /* 图形验证码 */
    /* [1] 先下载和引用插件 */
    /* [2] 在页面中指定的位置提供canvas标签 */
    /* [3] 在js代码中调用插件中提供的构造函数创建实例对象，并且调用draw方法 */
    let imgCodeTarget;
    let captcha = new Captcha({ lineNum: 10, dotNum: 3, fontSize: 40, length: 4, content: "0123456789" });

    captcha.draw(document.querySelector('#captcha'), r => {
        imgCodeTarget = r;
        // console.log(r, '验证码');

        $("#imageCode").trigger("blur");
        // console.log($("#imageCode"));
    });
    
    /* 注册按钮的点击事件 */

    $("#register_btn").click(function(){

        /* 001-检查用户是否输入了正确的信息并且通过验证，如果没有通过那么就返回 */
        $("#phone,#password,#imageCode").trigger("blur");
        if($(".active").length !=0){
            return;
        }
        
        /* 002-发送网络请求把注册相关的信息提交给服务器 */
        let data = {
            phone:$.trim($("#phone").val()),
            password:md5($.trim($("#password").val())).substr(0,15),
        }

        $.ajax({
            data,
            type: "get",
            dataType: "json",
            url: "../api/register.php",
            success(response){

                if(response.status == "success"){
                    
                    alert(response.msg);

                    localStorage.setItem() = username;
                    localStorage.setItem() = id;

                    window.location.href = "./login.html";
                }else{
                    alert(response.msg);
                }
            }
        })

    })
    
})