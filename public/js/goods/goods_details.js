//数量减
$("#numRedu").click(function () {
    if ($("#numValue").val()<=1){
        $("#numValue").val("1");
    } else {
        $("#numValue").val(Number($("#numValue").val())-1);
    }
});
//数量加
$("#numadd").click(function () {
    $("#numValue").val(Number($("#numValue").val())+1);
});