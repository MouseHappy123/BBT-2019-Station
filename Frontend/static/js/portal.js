var img = new Image();
img.src = "../static/pictures/1-1.png";
img.onload = function () {
    $(".cloud").css("display", "block");
    $(".entrance").css("display", "block");
    setTimeout(function () {
        $(".train-picture").css("display", "block");
        $(".train-picture").addClass("train-picture-move");
    }, 4000);
    setTimeout(function () {
        $(".entrance").css("display", "block");
    }, 2000)
}
$(function () {

    //调用微信分享接口
    wxshare();


    // 活动时间检查 (此处先注释用于内测)
    // var time = checkTime();
    // if (time == 0) {
    $("#entrance").click(function () {
        window.location.href = "../html/draw.html";
    });
    // } else {
    //     $(".err-box").show();
    //     //禁用按钮
    //     $("#entrance").attr("disabled", true);
    // }
    $(".err-button").click(function () {
        $(".err-box").hide();
    })
});