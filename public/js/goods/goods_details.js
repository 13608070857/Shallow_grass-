//数量减
$("#numRedu").click(function () {
    if ($("#numValue").val()<=1){
        $("#numValue").val("1");
    } else {
        $("#numValue").val(Number($("#numValue").val())-1);
    }
});
//数量加
$("#numadd").click(function () {
    $("#numValue").val(Number($("#numValue").val())+1);
});
//加入购物车
$(".myShopDiv").css("height",document.documentElement.clientHeight+"px");
$("#addShop").click(function (event) {
    event.stopPropagation();
    $(".myShopDiv").css({
        "overflow":"visible",
        "width":"340px"
    });
});
$("body").click(function () {
    $(".myShopDiv").css({
        "overflow":"hidden",
        "width":"0"
    });
});