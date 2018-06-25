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
$("#addShop").on("mousedown",function () {
    console.log("开始刷新！");
    $("#myShopDiv").load(location.href + " #myShopDiv");

});
$("body").click(function () {
    $(".myShopDiv").css({
        "overflow":"hidden",
        "width":"0"
    });
});
//商品详情/用户评论
$(".userComments>span").click(function () {
    $(".userComments>span").attr("class","commUnactive");
    $(this).attr("class","commActive");
});
$(".commActive").click(function () {
    $(".detailsList").css("display","block");
    $(".commentsList").css("display","none");
});
$(".commUnactive").click(function () {
    $(".detailsList").css("display","none");
    $(".commentsList").css("display","block");
});
//用户评论
$(".comUl>li").click(function () {
    $(".comUl>li").attr("class","comUlUnactive");
    $(this).attr("class","comUlactive");
});
$("#allCom").click(function () {
    $(".allCom").css("display","block");
    $(".goodCom").css("display","none");
    $(".medCom").css("display","none");
    $(".badCom").css("display","none");
});
$("#goodCom").click(function () {
    $(".allCom").css("display","none");
    $(".goodCom").css("display","block");
    $(".medCom").css("display","none");
    $(".badCom").css("display","none");
});
$("#medCom").click(function () {
    $(".allCom").css("display","none");
    $(".goodCom").css("display","none");
    $(".medCom").css("display","block");
    $(".badCom").css("display","none");
});
$("#badCom").click(function () {
    $(".allCom").css("display","none");
    $(".goodCom").css("display","none");
    $(".medCom").css("display","none");
    $(".badCom").css("display","block");
});
$("#nullshop").click(function () {
    alert("你还未登录哦！")
});
$.ajax({
    type:"get",
    url:"/goods_details.do",
    data:{
        goodsnum:$("#numValue").val(),
        goodsprice:$("#goodsPrice").html(),
        totalprice:Number($("#numValue").val()*$("#goodsPrice").html())
    },
    dataType:"json",
    success:function (data) {

    }
});