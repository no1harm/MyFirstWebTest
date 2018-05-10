//自执行的匿名函数
(function handle_1() {
    //其实这里没必要使用id因为数据那么少$函数直接获取标签就行
    var inp = $("#input_box1_input");
    var out = $("#input_box1_p");
    $.click("#input_box1_button",function(){
        // var value = inp.value.split(/\,|\，/); //1.根据半角逗号分割成数组。
        var value = inp.value.split(/\n|\s+|\,|\，|\、|\;|\；/) //对“换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号”进行处理。
        var unValue = uniqArray(value); //2.数组去重
        for (var i = 0, len = unValue.length; i < len; i++) {
            var trimValue = trim(unValue[i]); //3.对每一项进行去除首尾空格操作
            console.log(trimValue);
            if (trimValue !== "") { //4.只有在去除首尾空格后不为空的数组才输出。
                out.innerHTML += "<li>" + trimValue + "</li>"
            }
        }
    })
})();
// $("button").click
// console.log("here")
