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
var deccartArry=[];
var deccartObj={};
var subtotalArry=[];
var subtotal=0;
$("#addShop").click(function (event) {
    event.stopPropagation();
    $(".myShopDiv").css({
        "overflow":"visible",
        "width":"340px"
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
    deccartObj.decimg=$("#decimg").attr("src");
    deccartObj.decname=$("#decname").html();
    deccartObj.numValue=$("#numValue").val();
    deccartObj.goodsPrice=$("#goodsPrice").html();
    deccartArry.push(deccartObj);
    console.log(deccartArry)
    $("#detailShopcart").append("<li>\n" +
        "                <img src='"+deccartArry[0].decimg+"' class=\"img-responsive pull-left goodsimg\">\n" +
        "                <span class=\"mygoodsName introLine1 pull-left goodsname\">"+deccartArry[0].decname+"</span>\n" +
        "                <span class=\"mygoodsNum pull-left\">\n" +
        "                <span class='goodsnum'>"+deccartArry[0].numValue+"</span>\n" +
        "                <span>x</span>\n" +
        "                <span>¥<span class='goodsprice'>"+deccartArry[0].goodsPrice+"</span></span>\n" +
        "                </span>\n" +
        "            </li>");
    subtotalArry.splice(0,subtotalArry.length);
    subtotalArry.push(Number($(".goodsnum").html()*$(".goodsprice").html()));
    for (var i=0;i<subtotalArry.length;i++){
        subtotal+=subtotalArry[i];
    }
    $("#subtotal").html(subtotal.toFixed(2));
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