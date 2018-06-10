$(".esTitle>div").click(function() {
    $(".esTitle>div").attr("class","col-lg-2");
    $(this).attr("class","col-lg-2 currentList");
});

var onOff = false;
$(".cusB").click(function() {
    var currentHeight;
    if(onOff == false) {
        currentHeight = $(".cusText").height() + 5;
        $(this).children("img").get(0).src = "img/cusBottom2.png";
        onOff = true;
    }else {
        $(this).children("img").get(0).src = "img/cusBottom.png";
        currentHeight = $(this).children("img").height();
        onOff = false;
    }
    $(this).css("height",currentHeight+"px");
});

$(".del").click(function() {
    var productList = $(this).parent().parent().parent();
    productList.remove();
    for(var i=0;i<$(".interList").length;i++) {
        if($($(".interList")[i]).children().length == 0) {
            if($($(".interList")[i]).parent().hasClass("viewList")) {
                $($(".interList")[i]).parent().remove();
            }else {
                $($(".interList")[i]).remove();
            }
        }
    }
});
