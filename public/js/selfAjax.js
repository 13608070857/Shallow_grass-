function selfAjax(myUrl,myData,myFn) {
    $.ajax({
        url:myUrl,
        data:myData,
        success:function(data) {
            myFn();
        }
    })
}