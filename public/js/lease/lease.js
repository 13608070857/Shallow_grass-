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
//滚轮事件
document.onscroll = abc;
function abc() {
    var i = document.documentElement.scrollTop;
    var a =document.getElementsByClassName("details");
    var b =document.getElementsByClassName("details2");
    if (i>80){
        a[0].style.top="6%";
        a[0].style.opacity="1";
    }else {
        a[0].style.top="66%";
        a[0].style.opacity="0.2";
    }
    if (i>1000){
        b[0].style.top="6%";
        b[0].style.opacity="1";
    }else {
        b[0].style.top="66%";
        b[0].style.opacity="0.2";
    }
    if (i>1980){
        a[1].style.top="6%";
        a[1].style.opacity="1";
    }else {
        a[1].style.top="66%";
        a[1].style.opacity="0.2";
    }
}