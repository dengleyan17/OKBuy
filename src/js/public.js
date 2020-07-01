$(() => {
    // 二级导航鼠标进入显示
    $(".hassub .nav_a1").hover(function () {
        $(".jsnav1").css("display", "block");
    }, function () {
        $(".jsnav1").css("display", "none");
    });
    $(".jsnav1").hover(function () {
        $(".jsnav1").css("display", "block");
    }, function () {
        $(".jsnav1").css("display", "none");
    });

    $(".hassub .nav_a2").hover(function () {
        $(".jsnav2").css("display", "block");
    }, function () {
        $(".jsnav2").css("display", "none");
    });
    $(".jsnav2").hover(function () {
        $(".jsnav2").css("display", "block");
    }, function () {
        $(".jsnav2").css("display", "none");
    });

    $(".hassub .nav_a3").hover(function () {
        $(".jsnav3").css("display", "block");
    }, function () {
        $(".jsnav3").css("display", "none");
    });
    $(".jsnav3").hover(function () {
        $(".jsnav3").css("display", "block");
    }, function () {
        $(".jsnav3").css("display", "none");
    });

    // 回到顶部按钮功能
    window.onscroll = function(){
        let scrollTop = document.documentElement.scroll ? document.documentElement.scrollTop : document.body.scrollTop;

        if(scrollTop > 800){
            $("#gotop").css("display","block");
        }else{
            $("#gotop").css("display","none");
        }
    };

    let goToTop;

    $(".top").click(function(){

        let a = document.documentElement.scrollTop;

            
            goToTop = setInterval(()=>{
            let current = document.documentElement.scrollTop || document.body.scrollTop;
            let speed = Math.floor(-current / 6);
            
            document.documentElement.scrollTop = document.body.scrollTop = current + speed;

            if(current == 0){
                clearInterval(goToTop);
            }
        },23)
    });

    // 回到顶部过程中，滚动鼠标滚轮阻止回到顶部事件
    window.onmousewheel = function(){
        clearInterval(goToTop);
    }


    //吸顶效果
    let sidebar = $(".nnav");
    let offset = sidebar.offset();

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        if(offset.top < scrollTop){
            sidebar.css("position","fixed");
            sidebar.css("top","0");
        }else{
            sidebar.css("position","static");
            sidebar.css("top","0");
            
        }
    })

})