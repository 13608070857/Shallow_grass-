var jiantouL=document.getElementsByClassName("jiantouL");
var jiantouR=document.getElementsByClassName("jiantouR");
var i=0;
var width1=document.body.clientWidth;
if (width1<1369&&width1>1300){
    var j=45;
}else {
    j=0
}
if (width1<1300){
    var n=170;
}else {
    n=0
}
jiantouR[0].onclick=function () {
    var imgmar=document.getElementById("exhibitionOneBoxImg");
    i++;
    if (i>0){
        imgmar.style.marginLeft=i*-(578-j-n)+"px";
    }
    if(i==3){
        i=2;
        imgmar.style.marginLeft=i*-(578-j-n)+"px";
    }
};
jiantouL[0].onclick=function () {
    var imgmar=document.getElementById("exhibitionOneBoxImg");
    i--;
    if (i>=0){
        imgmar.style.marginLeft=i*-578+"px";
    }
    if(i==(-1)){
        i=0;
        imgmar.style.marginLeft=i*-578+"px";
    }
};
