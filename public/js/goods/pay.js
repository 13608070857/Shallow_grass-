setTimeout(function () {
    $("#pay").css("display","none");
    $("#successPay").css("display","block");
    setTimeout(function () {
        location.href="/index";
    },3000);
},6000);