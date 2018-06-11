//选择收货地址
$(".addList>ul>li").click(function () {
    $(".addList>ul>li").attr("class","unactive");
    $(this).attr("class","active");
});
//数量减
$(".numRedu").click(function () {
    var unit_price=parseFloat($(this).parent().parent().parent().children(".unit_price").children("span").html());
    var subtotal=parseFloat($(this).parent().parent().parent().children(".subtotal").children("span").html());
    if ($(this)[0].nextSibling.nextSibling.value<=1){
        $(this)[0].nextSibling.nextSibling.value=1;
    } else {
        $(this)[0].nextSibling.nextSibling.value=Number($(this)[0].nextSibling.nextSibling.value)-1;
        $(this).parent().parent().parent().children(".subtotal").children("span").html((subtotal-unit_price).toFixed(2));
        // $(this).parent().parent().parent().children(".money").children("span").html((subtotal-unit_price).toFixed(2));
    }
});
//数量加
$(".numadd").click(function () {
    var unit_price=parseFloat($(this).parent().parent().parent().children(".unit_price").children("span").html());
    $(this).parent().parent().parent().children(".subtotal").children("span").html(unit_price);
    // $(this).parent().parent().parent().children(".money").children("span").html(unit_price);
    $(this)[0].previousSibling.previousSibling.value=Number($(this)[0].previousSibling.previousSibling.value)+1;
    var subtotal=parseFloat($(this).parent().parent().parent().children(".subtotal").children("span").html());
    $(this).parent().parent().parent().children(".subtotal").children("span").html((parseFloat($(this)[0].previousSibling.previousSibling.value)*subtotal).toFixed(2));
    // $(this).parent().parent().parent().children(".money").children("span").html((parseFloat($(this)[0].previousSibling.previousSibling.value)*subtotal).toFixed(2));
});
//订单信息选中
$("tbody>tr").click(function () {
    var mycheck=$(this).children("td:nth-child(1)").children("input[type='checkbox']");
    if (mycheck.is(":checked")==true){
        mycheck.prop("checked",false);
        $(".check_all").prop("checked",false);
    } else{
        mycheck.prop("checked",true);
    }
});
//全选
$(".check_all").click(function () {
    if ($(".check_all").is(":checked")==true){
        $("tbody>tr input[type='checkbox']").prop("checked",true);
    } else {
        $("tbody>tr input[type='checkbox']").prop("checked",false);
    }
});
//新增地址按钮
$(".add_cart_btn").click(function () {
    $(".add_cart_btn").css("color","#FFFFFF");
});
//提交订单按钮
$(".refer_btn").click(function () {
    $(".refer_btn").css("color","#FFFFFF");
});
//支付方式
$(".payList ul>li").click(function () {
    $(".payList ul>li").attr("class","payunactive");
    $(this).attr("class","payactive");
});
//配送方式
$(".psList ul>li").click(function () {
    $(".psList ul>li").attr("class","payunactive");
    $(this).attr("class","payactive");
});