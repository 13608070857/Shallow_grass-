//滚轮事件
document.onscroll = abc;
var ow = document.documentElement.clientWidth;
function abc() {
    var i = document.documentElement.scrollTop;
    var a =document.getElementsByClassName("productText");
    var b =document.getElementsByClassName("productText2");
    if (ow>1120){
        if (i>500) {
            a[0].style.marginTop="0";
            a[0].style.opacity="1";
        }
        if (i>1000){
            b[0].style.marginTop="0";
            b[0].style.opacity="1";
        }else {
            b[0].style.marginTop="150px";
            b[0].style.opacity="0.2";
        }
        if (i>1650){
            a[1].style.marginTop="0";
            a[1].style.opacity="1";
        }else {
            a[1].style.marginTop="150px";
            a[1].style.opacity="0.2";
        }
        if (i>2250){
            b[1].style.marginTop="0";
            b[1].style.opacity="1";
        }else {
            b[1].style.marginTop="150px";
            b[1].style.opacity="0.2";
        }
        if (i>2850){
            a[2].style.marginTop="0";
            a[2].style.opacity="1";
        }else {
            a[2].style.marginTop="150px";
            a[2].style.opacity="0.2";
        }
        if (i>3450){
            b[2].style.marginTop="0";
            b[2].style.opacity="1";
        }else {
            b[2].style.marginTop="150px";
            b[2].style.opacity="0.2";
        }
        if (i>4050){
            a[3].style.marginTop="0";
            a[3].style.opacity="1";
        }else {
            a[3].style.marginTop="150px";
            a[3].style.opacity="0.2";
        }
        if (i>4650){
            b[3].style.marginTop="0";
            b[3].style.opacity="1";
        }else {
            b[3].style.marginTop="150px";
            b[3].style.opacity="0.2";
        }
        if (i>5250){
            a[4].style.marginTop="0";
            a[4].style.opacity="1";
        }else {
            a[4].style.marginTop="150px";
            a[4].style.opacity="0.2";
        }
        if (i>5850){
            b[4].style.marginTop="0";
            b[4].style.opacity="1";
        }else {
            b[4].style.marginTop="150px";
            b[4].style.opacity="0.2";
        }
    }else {
        if (i>500) {
            a[0].style.marginTop="0";
            a[0].style.opacity="1";
        }
        if (i>1000){
            b[0].style.marginTop="0";
            b[0].style.opacity="1";
        }else {
            b[0].style.marginTop="150px";
            b[0].style.opacity="0.2";
        }
        if (i>1500){
            a[1].style.marginTop="0";
            a[1].style.opacity="1";
        }else {
            a[1].style.marginTop="150px";
            a[1].style.opacity="0.2";
        }
        if (i>1900){
            b[1].style.marginTop="0";
            b[1].style.opacity="1";
        }else {
            b[1].style.marginTop="150px";
            b[1].style.opacity="0.2";
        }
        if (i>2400){
            a[2].style.marginTop="0";
            a[2].style.opacity="1";
        }else {
            a[2].style.marginTop="150px";
            a[2].style.opacity="0.2";
        }
        if (i>2900){
            b[2].style.marginTop="0";
            b[2].style.opacity="1";
        }else {
            b[2].style.marginTop="150px";
            b[2].style.opacity="0.2";
        }
        if (i>3400){
            a[3].style.marginTop="0";
            a[3].style.opacity="1";
        }else {
            a[3].style.marginTop="150px";
            a[3].style.opacity="0.2";
        }
        if (i>3900){
            b[3].style.marginTop="0";
            b[3].style.opacity="1";
        }else {
            b[3].style.marginTop="150px";
            b[3].style.opacity="0.2";
        }
        if (i>4400){
            a[4].style.marginTop="0";
            a[4].style.opacity="1";
        }else {
            a[4].style.marginTop="150px";
            a[4].style.opacity="0.2";
        }
        if (i>4900){
            b[4].style.marginTop="0";
            b[4].style.opacity="1";
        }else {
            b[4].style.marginTop="150px";
            b[4].style.opacity="0.2";
        }
    }
}