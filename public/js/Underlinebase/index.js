/**
 * Created by Administrator on 2018/6/7/007.
 */
var diyrow=document.getElementById("diyrow");
var h3=$("#diyrow").find('>h3')[0];//找到#diyrow下面的第一个元素
var border=document.getElementsByClassName("border");
var hd=document.getElementsByClassName("hd")[0]
console.log(hd)
// var colLg=document.getElementsByClassName("col-lg-7")[0];
var e=document.getElementsByClassName("e");
console.log(e)
window.onscroll=function(){
    var LeftPlate=document.getElementById("LeftPlate");

    var t = document.documentElement.scrollTop||document.body.scrollTop;
    if(t<=150){
        LeftPlate.style.marginLeft="10%";
        LeftPlate.style.transition="all .5s linear";
    }if(t>=50){
        h3.style.marginTop="3%";
        h3.style.transition="all .5s linear";
        h3.style.opacity="1";

        for(var i=0;i<border.length;i++ ){
            border[i].style.opacity="1";
             border[i].style.transition="all .5s linear";
        }


    }if(t>=230){
        hd.style.marginTop="3%";
      hd.style.transition="all .5s linear";
        hd.style.opacity="1";

        for(var a=0;a<e.length;a++ ){
            e[a].style.left="0%";
           e[a].style.opacity="1";
            e[a].style.transition="all .9s linear";
        }
    }if(t>=930){
       var yh= $("#yh").find('>h3')[0];
        yh.style.marginTop="3%";
        // yh.style.opacity="1";
        yh.style.transition="all .5s linear"
    }
};

