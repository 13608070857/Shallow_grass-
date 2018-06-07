//植物品种
$("#varieties>li").on("click",function () {
    $("#varieties>li").attr("class","");
    $(this).attr("class","active");
});
//选购热点
$("#hot>li").on("click",function () {
    $("#hot>li").attr("class","");
    $(this).attr("class","active");
});
$(".listborder").mouseover(function () {
    $(this).children(".introborderDiv").children("img").css("transform","scale(1.2)");
    $(this).children(".introborder").children(".add_shop_cart").css("transform","translateY(-180px)");
    $(".introborder").css("overflow","visible");
});
$(".listborder").mouseout(function () {
    $(this).children(".introborderDiv").children("img").css("transform","scale(1)");
    $(this).children(".introborder").children(".add_shop_cart").css("transform","translateY(0px)");
    $(".introborder").css("overflow","hidden");
});