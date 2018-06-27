$(".goodsDiv").mouseover(function () {
    $(this).children("a").children(".goodsImg").children("img").css("transform","scale(1.2)");
    $(this).children("a").children(".goodsTextDiv").css("transform","translateY(-10px)");
    $(this).css("box-shadow"," 0px 0px 20px 0px #CCC");
    $(this).children(".collhref").children(".collSpan").css("opacity","1");
});
$(".goodsDiv").mouseout(function () {
    $(this).children("a").children(".goodsImg").children("img").css("transform","scale(1)");
    $(this).children("a").children(".goodsTextDiv").css("transform","translateY(0)");
    $(this).css("box-shadow","none");
    $(this).children(".collhref").children(".collSpan").css("opacity","0");
});
// ’≤ÿ
$(".collSpan").click(function () {
    var goodsimgList=$(this).parent().parent().children().children().children().attr("src");
    var goodsnameList=$(this).parent().parent().children().children(".goodsTextDiv").children(".goodsNmae").html();
    var goodspriceList=$(this).parent().parent().children().children(".goodsTextDiv").children(".goodsPrice").children("span").children("span").html();
    console.log(goodsimgList);
    console.log(goodsnameList);
    console.log(goodspriceList);
    $.ajax({
        type:"get",
        url:"/goods.do",
        data:{
            goodsimgList:goodsimgList,
            goodsnameList:goodsnameList,
            goodspriceList:goodspriceList
        },
        dataType:"json",
        success:function (data) {

        }
    });
});