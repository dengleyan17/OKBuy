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



})