$(()=>{
    $("#phone").val(17620926553)
    $("#password").val(123456)
    /* 001-切换功能 */
    $(".login-new-tabhead span").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".loginbody").eq($(this).index()).addClass("current").siblings().removeClass("current");
    })

    /* 002-移入二维码动画 */
    $(".havecode").on("mouseover",function(){
        $(".code").stop().animate({left:0},600);
        $(".prompt").stop().fadeIn(600);
    });
    $(".havecode").on("mouseout",function(){
        $(".code").stop().animate({left:80},600);
        $(".prompt").stop().fadeOut(600);
    })

    /* 003-点击登录按钮 */
    $("#login_btn").click(function(){
        let phone = $.trim($("#phone").val());
        let password = $.trim($("#password").val());

        if(phone.length ==0){
            $(".phoneerror").text("请输入已注册手机号");
        }else{
            $(".phoneerror").text("");
        }

        if(password.length ==0){
            $(".passworderror").text("请输入密码");
            return
        }else{
            $(".passworderror").text("");
        }

        let data = {
            phone,
            password: md5(password).substr(0,15)
        }

        $.ajax({
            type: "post",
            url: "../api/login.php",
            data,
            dataType: "json",
            success: function(response){
                if(response.status == "success"){
                    alert(response.msg);
                    window.location.href = "../html/index.html";
                }else{
                    alert(response.msg);
                }
            }
        })
        

    })
})