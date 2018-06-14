window.onscroll=function () {
    var  t=document.documentElement.scrollTop||document.body.scrollTop;

    if (t>20){

        $(".wz").css("marginLeft", "-1%");
        $(".wz").css("transition", "all .5s linear");
        //Ô­Éújs
        // var banner=document.getElementById("banner");
        // banner.style.marginLeft="26%";
        // banner.style.transition="all .5s linear";
    }
    if (t>800){
        $(".bz1").css("marginLeft", "-1%");
        $(".bz1").css("transition", "all .5s linear");
    }
    if (t>1000){
        $(".bz2").css("marginLeft", "-1%");
        $(".bz2").css("transition", "all .5s linear");
    }
    if (t>1200){
        $(".bz3").css("marginLeft", "-1%");
        $(".bz3").css("transition", "all .5s linear");
    }
    if (t>1500){
        $(".bz4").css("marginLeft", "-1%");
        $(".bz4").css("transition", "all .5s linear");
    }
    if (t>1800){
        $(".bz5").css("marginLeft", "-1%");
        $(".bz5").css("transition", "all .5s linear");
    }
    if (t>2100){
        $(".bz6").css("marginLeft", "-1%");
        $(".bz6").css("transition", "all .5s linear");
    }
    if (t>2400){
        $(".bz7").css("marginLeft", "-1%");
        $(".bz7").css("transition", "all .5s linear");
    }
    if (t>2700){
        $(".bz8").css("marginLeft", "-1%");
        $(".bz8").css("transition", "all .5s linear");
    }
};