var delArry=[];
$(".delSpan").click(function () {
    delArry.splice(0,delArry.length);
    delArry.push($(this).attr("id"));
    console.log(delArry[0]);
});
$.ajax({
    type:"get",
    url:"/delcartgoods.do",
    data:{
        shopcartid:delArry[0]
    },
    dataType:"json",
    success:function (data) {

    }
});