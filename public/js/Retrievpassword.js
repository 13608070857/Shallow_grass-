$("#onnumber").click(function () {
    ff(0,1,1)
});
$("#onVerification").click(function () {
    ff(1,2,2)
});
$("#onpassword").click(function () {
    ff(2,3,3);
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
