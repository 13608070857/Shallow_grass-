// 淡入淡出轮播图
$(document).ready(function() {
    var i = 0;
    var j = $(".banner li").length;
    $(".banner li").eq(0).fadeIn(2000);
    setInterval(hdmove, 5000);
    function hdmove() {
        i++;
        if(j == i) {
            i = 0;
            $(".banner li").eq(i).fadeIn(2000);
            $(".banner li").eq(j - 1).fadeOut(2000);
        } else {
            $(".banner li").eq(i).fadeIn(2000);
            $(".banner li").eq(i - 1).fadeOut(2000);
        }
    }
});