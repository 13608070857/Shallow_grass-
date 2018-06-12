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
    console.log($(this).children(".add_shop_cart"));
    $(this).children("a").children(".introborderDiv").children("img").css("transform","scale(1.2)");
    $(this).children(".add_shop_cart").css({
        "overflow":"visible",
        "opacity":"1",
        "transform":"translateY(-220px)"
    });
});
$(".listborder").mouseout(function () {
    $(this).children("a").children(".introborderDiv").children("img").css("transform","scale(1)");
    $(this).children(".add_shop_cart").css({
        "overflow":"hidden",
        "opacity":"0",
        "transform":"translateY(0px)"
    });
});