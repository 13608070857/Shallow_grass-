//页面载入
window.onload =function(){
    var a =document.getElementsByClassName("productText");
    a[0].style.marginTop="0";
    a[0].style.opacity="1";
};
//滚轮事件
document.onscroll = abc;
function abc() {
    var i = document.documentElement.scrollTop;
    var a =document.getElementsByClassName("productText");
    var b =document.getElementsByClassName("productText2");
    if (i>190){
        b[0].style.marginTop="0";
        b[0].style.opacity="1";
    }else {
        b[0].style.marginTop="150px";
        b[0].style.opacity="0.2";
    }
    if (i>800){
        a[1].style.marginTop="0";
        a[1].style.opacity="1";
    }else {
        a[1].style.marginTop="150px";
        a[1].style.opacity="0.2";
    }
    if (i>1410){
        b[1].style.marginTop="0";
        b[1].style.opacity="1";
    }else {
        b[1].style.marginTop="150px";
        b[1].style.opacity="0.2";
    }
    if (i>2010){
        a[2].style.marginTop="0";
        a[2].style.opacity="1";
    }else {
        a[2].style.marginTop="150px";
        a[2].style.opacity="0.2";
    }
    if (i>2610){
        b[2].style.marginTop="0";
        b[2].style.opacity="1";
    }else {
        b[2].style.marginTop="150px";
        b[2].style.opacity="0.2";
    }
}