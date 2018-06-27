var b=3
$("#onnumber").click(function () {
    $.ajax({
        url:"/xgsjh.do",
        type:"get",
        data:{
            phone:$("#phone").val()
        },
        success:function (data) {
            if(data.length==0){
                console.log(data)
                $("#sjh").html("没有此账号")
            }else {
                ff(0,1,1)
                $.ajax({
                    url:"/xgmmdx.do",
                    type:"post",
                    data:{
                        phone:$("#phone").val()
                    },
                    success:function (data) {
                        console.log(data)
                    }
                })
            }

        }
    })

});
$("#onVerification").click(function () {
    $.ajax({
        url:"/xgmmyzm.do",
        type:"get",
        data:{
            phone:$("#phone").val(),
            code:$("#code").val()
        },
        success:function (data) {
            if(data=="验证失败"){
                $("#yzm").html(data)
            }else {
                ff(1,2,2)
            }
        }
    })
});
$("#onpassword").click(function () {
    if($("#mm1").val()==$("#mm2").val()){
        $.ajax({
            url:"/xgmmjrsjk.do",
            type:"get",
            data:{
                phone:$("#phone").val(),
                mm:$("#mm2").val(),
            },
            success:function (data) {
                ff(2,3,3);
                setInterval(jsq,1000);
                function jsq() {
                    if(b<=0){
                        $(".security b").eq(0).html(0);
                        location.href="/login"
                    }else {
                        $(".security b").eq(0).html(b);
                        b--
                    }

                }
            }
        })
    }else {
        $("#mm").val("密码不一样")
    }

})
function ff(a,b,c) {
    $(".security1").eq(a).css({
        "display":"none"
    });
    $(".security1").eq(b).css({
        "display":"block"
    });
    $("span").eq(c).css({
        "background":"#7B7446"
    })
}
