/**
 * Created by Administrator on 2018/6/7/007.
 */


window.onscroll=function () {
    var  t=document.documentElement.scrollTop||document.body.scrollTop;

if (t>0){

    $("#banner").css("marginLeft", "26%");
    $("#banner").css("transition", "all .5s linear");
    //原生js
    // var banner=document.getElementById("banner");
    // banner.style.marginLeft="26%";
    // banner.style.transition="all .5s linear";


}
}

