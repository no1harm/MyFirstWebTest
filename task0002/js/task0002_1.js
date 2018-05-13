//自执行的匿名函数
(function handle_1() {
                                                                                                    //其实这里没必要使用id因为数据那么少$函数直接获取标签就行
    var inp = $("#input_box1_input");
    var out = $("#input_box1_p");
    $.click("#input_box1_button",function(){
                                                                                                    // var value = inp.value.split(/\,|\，/); //1.根据半角逗号分割成数组。
        var value = inp.value.split(/\n|\s+|\,|\，|\、|\;|\；/)                                      //对“换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号”进行处理。
        var unValue = uniqArray(value);                                                             //2.数组去重
        for (var i = 0, len = unValue.length; i < len; i++) {
            var trimValue = trim(unValue[i]);                                                       //3.对每一项进行去除首尾空格操作
            console.log(trimValue);
            if (trimValue !== "") {                                                                 //4.只有在去除首尾空格后不为空的数组才输出。
                out.innerHTML += "<li>" + trimValue + "</li>"
            }
        }
    })
})();


window.onload = winLoad()                                                                       //when ready
function winLoad(){
    function input_time(){
        var output_p = $("#time_show")
        var input_time_text = $("#input_time");                                                     //获取输入框内日期        
        var inputTimeText = input_time_text.value.match(/(^\d{4})-(\d{2})-(\d{2}$)/);               //匹配所输入日期的正则，返回一个数组 
        if (inputTimeText !== null){
            var nowDate = new Date();                                                               //获取当前日期
            var timeDate = new Date(inputTimeText[1], inputTimeText[2] - 1, inputTimeText[3]);    //创建所输入日期   // input_time_text[2]-1是因为月份是0-11
            var getTimePrint = timeDate.getTime() - nowDate.getTime()                               //获得相差毫秒数   // getTime()获取毫秒数
            var leftTime = parseInt((timeDate.getTime() - nowDate.getTime())/1000)                  //获得相差秒数
            var d = parseInt(leftTime / (60 * 60 * 24));                                            //获得相差天数
            var h = parseInt(leftTime / (60 * 60) % 24);                                            //获得相差小时数
            var m = parseInt(leftTime / 60 % 60 );                                                  //获得相差分钟数
            var s = parseInt(leftTime % 60);                                                        //获取相差秒数
            output_p.innerHTML = "距离" + timeDate.getFullYear() + "年" + (timeDate.getMonth() + 1) + "月" + timeDate.getDate() + "日，还有" + d + "天" + h + "小时" + m + "分" + s + "秒"; 
            setTimeout(input_time,1000);                                                            //使用回调函数，使input_time()函数在1000毫秒后再次进行
            if (getTimePrint <= 0) {                                                                //当输入的日期和当前日期已一致
                clearTimeout(input_time);
                output_p.innerHTML = "午时已到";
            } 
        } else {
            output_p.innerHTML = "输入时间错误，你只能前往未来，不能回到过去。";
        }      
    }
    $.click("#input_time_btn",function(){ 
        input_time();
    })
}
