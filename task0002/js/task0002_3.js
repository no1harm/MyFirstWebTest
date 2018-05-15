var count = 0;               //滚动的次数
var whereGo = false;         //滚动的执行方向
var timer ;                  //定义计时器对象


var ul_img = document.getElementsByClassName("ul_img")[0];
var li_img = document.getElementsByClassName("li_img");

function showtime() {
    timer = setInterval(function (){
        if (whereGo = false) {
            count++;
            ul_img.style.transform = "translate(" + -800 * count + "px)";
            if (count >= li_img.length - 1) {
                count = li_img.length - 1;
                whereGo = true;
            }
        } else {
            count--;
            ul_img.style.transform = "translate(" + -800 * count + "px)";
            if (count <= 0) {
                count = 0;
                whereGo = false;
            }
        }
    },3000);
}

var arrow = document.getElementsByClassName("arrow");
for (i = 0; i <arrow.length; i++) {
    arrow[i].onmouseover = function () {
        clearInterval(timer);
    }
    arrow[i].onmouseout = function() {
        showtime()
    }
    arrow[i].onclick = function () {
        if (this.title == 0){
            count++;
            if(count > 3){
                count = 0;
            }
        } else {
            count--;
            if(count <3){
                count = 3;
            }
        }
        ul_img.style.transform = "translate(" + -800 * count + "px)";
    }
}