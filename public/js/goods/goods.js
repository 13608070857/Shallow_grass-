$(".goodsDiv").mouseover(function () {
    $(this).children("a").children(".goodsImg").children("img").css("transform","scale(1.2)");
    $(this).children("a").children(".goodsTextDiv").css("transform","translateY(-10px)");
    $(this).css("box-shadow"," 0px 0px 20px 0px #CCC");
});
$(".goodsDiv").mouseout(function () {
    $(this).children("a").children(".goodsImg").children("img").css("transform","scale(1)");
    $(this).children("a").children(".goodsTextDiv").css("transform","translateY(0)");
    $(this).css("box-shadow","none");
});