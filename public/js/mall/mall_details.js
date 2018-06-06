$("#img4Div div").mouseover(function (obj) {
    $("#img4Div div").attr("class","");
    $(this).attr("class","active");
});
function myImg(obj) {
    console.log(obj.id.charAt(3));
    var num = obj.id.charAt(3);
    $("#imgdeta").css("background-image"," url('../img/mall/TB2C_"+num+".jpg')")
}
$("#speciSpan ul>li").on("click",function () {
    $("#speciSpan ul>li").css("border","1px solid #d3d3d3");
    $(this).css("border","1px solid #7B7446");
});