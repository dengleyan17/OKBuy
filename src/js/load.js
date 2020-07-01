$(()=>{
    let showText = localStorage.username;
    $(".logined .name").text(showText);

    if(localStorage.username){
        $(".logined").css("display","block");
        $(".unlogin").css("display","none");
    }else{
        $(".unlogin").css("display","block");
        $(".logined").css("display","none");
    }

    $(".logined .outlog").click(function(){
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        window.location.href = "../index.html"
    })
})