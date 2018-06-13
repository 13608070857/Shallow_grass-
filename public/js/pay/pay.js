setTimeout(function () {
    $("#pay").css("display","none");
    $("#successPay").css("display","block");
    setTimeout(function () {
        location.href="../index/index.html";
    },3000);
},6000);