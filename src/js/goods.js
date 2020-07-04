$(()=>{

    // 鼠标进入更换大图
    $(".prodConTopInLiImg td").mouseenter(function () {
        $(this).find("span[class=prodConTopInLiImgBor]").css("display","block");

        let src = $(this).find("span[class=prodConTopInLiImgBor]").prev().attr("src");
        $(".pBigPic img").attr("src",src);
        
    });
    $(".prodConTopInLiImg td").mouseleave(function () { 
        $(this).find("span[class=prodConTopInLiImgBor]").css("display","none");
    });

    // 点击切换码数
    $(".selectCurArea").on("click","a",function(){
        $(this).addClass("selectCurrentLink").parent().parent().siblings().children().children().removeClass("selectCurrentLink");
        
    });

    // 点击加入购物车
    $("#prodCartBtn").click(function(){

        let userid = localStorage.getItem("id") || "";
        let username = localStorage.getItem("username") || "";
        let comid = $(this).parent().attr("comid");

        if(userid && username){
            $.ajax({
                url: "../api/addCart.php",
                data: { userid, comid }
            }).done(data => {
                alert("添加成功！");
            });
        }else{
            location.href = "./login.html";
        }
    })
})