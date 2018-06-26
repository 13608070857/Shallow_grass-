$("input").blur(function () {
    var phonetest2=/0?(13|14|15|18)[0-9]{9}/;
    var eamiltest2=/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
    var zipcodetest2=/\d{6}/;
    if ($("#surname").val()!="" & $("#name").val()!="" & $("#zip_code").val()!="" & $("#address").val()!="" & $("#eamil").val()!="" & $("#phone").val()!="" & phonetest2.test($("#phone").val())==true & eamiltest2.test($("#eamil").val())==true & zipcodetest2.test($("#zip_code").val())==true){
        $("#payorder").removeAttr("disabled");
    } else {
        $("#payorder").attr("disabled","disabled");
    }
});
//姓
$("#surname").blur(function () {
    if ($("#surname").val()==""){
        $("#surname").css("border","1px solid red");
        $("#surnamemsg").html("<span style='color: red;'>不能为空!</span>");
    } else {
        $("#surname").css("border","1px solid #C6C6C6");
        $("#surnamemsg").html("");
    }
});
//名
$("#name").blur(function () {
    if ($("#name").val()==""){
        $("#name").css("border","1px solid red");
        $("#namemsg").html("<span style='color: red;'>不能为空!</span>");
    } else {
        $("#name").css("border","1px solid #C6C6C6");
        $("#namemsg").html("");
    }
});
//邮政编码
$("#zip_code").blur(function () {
    var zipcodetest=/\d{6}/;
    if ($("#zip_code").val()==""){
        $("#zip_code").css("border","1px solid red");
        $("#zip_codemsg").html("<span style='color: red;'>邮政编码不能为空!</span>");
    } else {
        $("#zip_code").css("border","1px solid #C6C6C6");
        $("#zip_codemsg").html("");
        if (zipcodetest.test($("#zip_code").val())==false){
            $("#phone").css("border","1px solid red");
            $("#zip_codemsg").html("<span style='color: red;'>邮政编码格式不正确!</span>");
        } else{
            $("#phone").css("border","1px solid #C6C6C6");
            $("#zip_codemsg").html("");
        }
    }
});
//地址
$("#address").blur(function () {
    if ($("#address").val()==""){
        $("#address").css("border","1px solid red");
        $("#addressmsg").html("<span style='color: red;'>地址不能为空!</span>");
    } else {
        $("#address").css("border","1px solid #C6C6C6");
        $("#addressmsg").html("");
    }
});
//Email 地址
$("#eamil").blur(function () {
    var eamiltest=/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
    if ($("#eamil").val()==""){
        $("#eamil").css("border","1px solid red");
        $("#eamilmsg").html("<span style='color: red;'>Email地址不能为空!</span>");
    } else {
        $("#eamil").css("border","1px solid #C6C6C6");
        $("#eamilmsg").html("");
        if (eamiltest.test($("#eamil").val())==false){
            $("#phone").css("border","1px solid red");
            $("#eamilmsg").html("<span style='color: red;'>Email地址格式不正确!</span>");
        } else{
            $("#phone").css("border","1px solid #C6C6C6");
            $("#eamilmsg").html("");
        }
    }
});
//电话
$("#phone").blur(function () {
    var phonetest=/0?(13|14|15|18)[0-9]{9}/;
    if ($("#phone").val()==""){
        $("#phone").css("border","1px solid red");
        $("#phonemsg").html("<span style='color: red;'>电话不能为空!</span>");
    } else {
        $("#phone").css("border","1px solid #C6C6C6");
        $("#phonemsg").html("");
        if (phonetest.test($("#phone").val())==false){
            $("#phone").css("border","1px solid red");
            $("#phonemsg").html("<span style='color: red;'>电话号码格式不正确!</span>");
        } else{
            $("#phone").css("border","1px solid #C6C6C6");
            $("#phonemsg").html("");
        }
    }
});
$("#payorder").click(function () {
    var mydate = new Date();
    var year=mydate.getFullYear();
    var month=mydate.getMonth();
    var day=mydate.getDate();
    var h=mydate.getHours();
    var m=mydate.getMinutes();
    var s=mydate.getSeconds();
    var creattime=year+"-"+month+"-"+day+" "+h+":"+m+":"+s;
    $.ajax({
        type:"get",
        url:"/pay.do",
        data:{
            ausername:$("#surname").val()+$("#name").val(),
            address:$("#province").val()+$("#city").val()+$("#address").val(),
            zipcode:$("#zip_code").val(),
            eamil:$("#eamil").val(),
            phone:$("#phone").val(),
            isdefault:1,
            creattime:creattime
        },
        dataType:"json",
        success:function (data) {

        }
    });
});
