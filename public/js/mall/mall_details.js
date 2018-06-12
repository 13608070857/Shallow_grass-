$("#img4Div div").mouseover(function () {
    $("#img4Div div").attr("class","");
    $(this).attr("class","active");
});
function myImg(obj) {
    console.log(obj.id.charAt(3));
    var num = obj.id.charAt(3);
    $("#imgdeta").css("background-image"," url('../img/mall/TB2C_"+num+".jpg')")
}
//商品规格
$("#speciSpan ul>li").on("click",function () {
    $("#speciSpan ul>li").css("border","2px solid #d3d3d3");
    $(this).css("border","2px solid #7B7446");
});
//商品推荐
$(".listborder").mouseover(function () {
    $(this).children("a").children(".introborderDiv2").children("img").css("transform","scale(1.2)");
    $(this).children(".add_cart").css({
        "transform":"translateY(-180px)",
        "opacity":"1"
    });
});
$(".listborder").mouseout(function () {
    $(this).children("a").children(".introborderDiv2").children("img").css("transform","scale(1)");
    $(this).children(".add_cart").css({
        "transform":"translateY(0px)",
        "opacity":"0"
    });
});
//数量加减
$("#numRedu").click(function () {
    if ($("#numValue").val()<=1){
        $("#numValue").val("1");
    } else {
        $("#numValue").val(Number($("#numValue").val())-1);
    }
});
$("#numadd").click(function () {
    $("#numValue").val(Number($("#numValue").val())+1);
});
//商品介绍/商品评论
$(".mall_btn>div").click(function () {
    $(".mall_btn>div").attr("class","col-xs-2 intrUnactive");
    $(this).attr("class","col-xs-2 intrActive");
});
//商品介绍
$("#imgDec").click(function () {
    $("#mallL").css("display","block");
    $("#mallR").css("display","none");
});
//商品评论
$("#comments").click(function () {
    $("#mallL").css("display","none");
    $("#mallR").css("display","block");
});
//全部评论
$(".comList>ul>li").click(function () {
    $(".comList>ul>li").attr("class","comUnactive");
    $(this).attr("class","comActive");
});