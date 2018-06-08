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
    $("#speciSpan ul>li").css("border","1px solid #d3d3d3");
    $(this).css("border","1px solid #7B7446");
});
//商品推荐
$(".listborder").mouseover(function () {
    $(this).children(".introborderDiv2").children("img").css("transform","scale(1.2)");
    $(this).children(".introborder2").children(".add_cart").css("transform","translateY(-180px)");
    $(".introborder2").css("overflow","visible");
});
$(".listborder").mouseout(function () {
    $(this).children(".introborderDiv2").children("img").css("transform","scale(1)");
    $(this).children(".introborder2").children(".add_cart").css("transform","translateY(0px)");
    $(".introborder2").css("overflow","hidden");
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