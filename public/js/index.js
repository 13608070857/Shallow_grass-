$(document).ready(function() {
    var MyHdTemp = 0;
    var MyHdImgLength = $(".banner li").length;
    console.log(MyHdImgLength);
    $(".banner li").eq(0).fadeIn(500);
    setInterval(hdmove, 2000);
    function hdmove() {
        MyHdTemp++;
        if(MyHdImgLength == MyHdTemp) {
            MyHdTemp = 0;
            $(".banner li").eq(MyHdTemp).fadeIn();
            $(".banner li").eq(MyHdImgLength - 1).fadeOut();
        } else {
            $(".banner li").eq(MyHdTemp).fadeIn();
            $(".banner li").eq(MyHdTemp - 1).fadeOut();
        }
    }
});