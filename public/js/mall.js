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