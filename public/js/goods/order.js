var paytype=1;
var payform=1;
var defaultaddress=[];
function mypay(obj){
    if (obj.getAttribute("class")=="zfbPay") {
        paytype=1;
        payform=1;
    }
    if (obj.getAttribute("class")=="wxPay") {
        paytype=1;
        payform=2
    }
    if (obj.getAttribute("class")=="unPay") {
        paytype=0;
        payform=3
    }
}
$("#payorder").click(function () {
    console.log("下单开始！")
    var mydate = new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth()+1;
    var day=mydate.getDate();
    var h=mydate.getHours();
    var m=mydate.getMinutes();
    var s=mydate.getSeconds();
    var creattime=year+"-"+month+"-"+day+" "+h+":"+m+":"+s;
    var orderno="0159"+year+month+day+h+m+s;
    $.ajax({
        type:"get",
        url:"/pay.do",
        data:{
            // ausername:$("#surname").val()+$("#name").val(),
            // address:$("#province").val()+$("#city").val()+$("#address").val(),
            // zipcode:$("#zip_code").val(),
            // phone:$("#phone").val(),
            // isdefault:1,
            creattime:creattime,
            orderno:orderno,
            totalprice:$("#totalSpan").html(),
            paytype:paytype,
            payform:payform,
            defaultaddress:defaultaddress[0]
        },
        dataType:"json",
        success:function (data) {

        }
    });
});
if ($(".addList>ul>li").attr("class")=="addactive"){
    defaultaddress.push($(".addidSpan").html());
}
//选择收货地址
$(".addList>ul>li").click(function () {
    $(".addList>ul>li").attr("class","addunactive");
    $(this).attr("class","addactive");
    defaultaddress.splice(0,defaultaddress.length);
    defaultaddress.push($(this).children(".addidSpan").html());
    console.log(defaultaddress[0]);
});