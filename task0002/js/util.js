// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // typeof办法并不能实时的检测出是否是数组，只能判断其类型
    // console.log(typeof arr == "array");
    console.log(arr instanceof Array)
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // instanceof 后面一定要是对象类型，并且大小写不能错，该方法适合一些条件选择或分支。
    console.log(fn instanceof Function)    
}

// 另外的方法：
//     1.typeof /typeof 可以判断function的类型；在判断除Object类型的对象时比较方便。
//     2.constructor
//     3.prototype /Object.prototype.toString.call(a) === ‘[object String]’
//     4.jquery.type()

// 遍历字符串并把他添加到一个新的数组里
var stringTest = "Username"
var arrTest = new Array()
for (i = 0; i < stringTest.length; i++) {
    arrTest[i] = stringTest[i]
}
console.log(arrTest)

// 遍历对象并Log出来
var obj = {a: 1, b: 2};  
for (let i in obj) {  
    console.log("key:" + i + ", value:" + obj[i]);  
} 

// 遍历数组并log出来
var a = [1,2,3]
for (i = 0;i < a.length; i++) {
    console.log(a[i])
}


// 浅度克隆：原始类型为值传递，对象类型仍为引用传递。/对于对象的浅克隆，修改新对象的时候会把原对象的属性也一起修改
var a="1";
var b=a;
b="2";
console.log(a);// "1"
console.log(b);// "2"

// 深度克隆：所有元素或属性均完全复制，与原对象完全脱离，也就是说所有对于新对象的修改都不会反映到原对象中。
function cloneObject(src) {
    var result
    if (typeof src == "string" || typeof src == "number") {
        var result = src;
    }
    else if (src instanceof Array == true) {
        var result = src
    }
    else if (typeof src == "object") {
        // 深度克隆实现方法1 /缺点：1.无法复制函数 2.原型链没有了，对象就是object，所属的类没有了。
        var result = JSON.parse (JSON.stringify(src))
    }
    return result;    
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 数组去重方法Set
function uniqArray(arr) {
    // 先把数组经过Set处理，生成一个Set对象(Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。)，再用Array.from再转化成一个数组
    // Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
    return Array.from(new Set(arr))
}
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);

// 实现一个简单的trim函数，用于去除一个字符串头部和尾部的空白字符
function simpleTrim(str) {
    return str.trim()
}
// 利用正则表达式去除字符串头部尾部空白字符
function trim(str) {
    return str.replace(/(^\s*)|(\s*)$/g,"");
}


// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// 其中fn函数可以接受两个参数：item和index
function each(arr, fn) {
    // js的函数并不在乎你参数的名字，要查参数名也没意义，它随时都可以变化。你只能从FUNCTION.length获取形参的个数。
    // 判断传入的fn函数有多少个参数，如果只有一个，则针对数组中的每一个元素执行fn函数
    if (fn.length == 1) {
        for (let i = 0; i < arr.length; i++) {
            fn(i)
        }
    }
    // 如果fn函数有两个参数，则将数组索引和元素作为参数传递
    else if (fn.length == 2) {
        for (let i = 0; i < arr.length; i++) {
            fn(i,arguments[0][i])
        }
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var n = 0;
    for (key in obj) {
        n++;
    }
    return n;
}

// 判断是否为邮箱地址
// ^ 表示匹配开头
// \w+  \w表示匹配一个英文字母或数字，+表示匹配前面的元素一次或者多次
// @  表示匹配@符号
// [a-z0-9]+  [a-z0-9]表示匹配字母a-z或0-9，+表示匹配前面的元素一次或者多次
// \.  表示匹配一个.
// [a-z]+ 表示匹配字母a-z之中任意一个，+表示匹配前面的元素一次或者多次
// {1,3}  表示匹配前面小括号中的内容1次-3次
// $ 表示匹配结尾
function isEmail(emailStr) {
    var emailReg = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
    if(emailReg.test(emailStr)) {
        console.log("您输入的Email地址格式正确！")
        return true;
    } else {
        console.log("您输入的Email地址格式不正确")
        return false;
    }
}

// 判断是否为手机号码
// 1--以1为开头；
// 2--第二位可为3,4,5,7,8,中的任意一位；
// 3--最后以0-9的9个整数结尾。
function isPhone(phoneInt) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
    if (myreg.test(phoneInt)) {
        console.log("您输入的手机号码格式正确！")  
        return true;  
    } else {  
        console.log("您输入的手机号码格式不正确！")          
        return false;  
    }  
}



// DOM

// 为element增加一个样式名为newClassName的新样式
// 另一种方法，element.classList.add('newClassName'),但是存在兼容性问题（不兼容IE10以下）
function addClass(element, newClassName) {
    if (!hasClass(element, newClassName)) {
        element.className += " " + newClassName;
        // element.className += " "
        // element.className += newClassName
    }
}

// 移除element中的样式oldClassName
// 也可以这样子写
// function removeClass(element, oldClassName) {
//     if (hasClass(element,oldClassName)) {
//         // 先获取element的所有classname
//         var elementClassName = element.className;
//         // 然后把oldclassname替换掉
//         var newElementClassName = elementClassName.replace(oldClassName,"");
//         element.className = newElementClassName;
//         // 简写 element.className = element.className.replace(oldClassName,"")
//     }
// }
function removeClass(element, oldClassName) {
    if (hasClass(element,oldClassName)) {
        var oldClassNameReg = new RegExp("(\\s|^)" + oldClassName + "(\\s|$)");
        element.className = element.className.replace(oldClassNameReg,"");
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
// var a = document.getElementByIdx_x_x("dom");
// var b = a.childNodes;   获取a的全部子节点
// var c = a.parentNode;   获取a的父节点
// var d = a.nextSbiling;   获取a的下一个兄弟节点
// var e = a.previousSbiling;获取a的上一个兄弟节点
// var f = a.firstChild;    获取a的第一个子节点
// var g = a.lastChild;     获取a的最后一个子节点
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
// max() 方法可返回两个指定的数中带有较大的值的那个数。
function getPosition(element) {
    var position = {};
    position.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);//获取相对位置+滚动距离=绝对位置.
    position.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    return position;
}

// 实现一个简单的Query
function VQuery(selector, root) {
    //用来保存选择的元素
    var elements = [];              //保存结果节点数组
    var allChildren = null;         //用来保存获取到的临时节点数组
    root = root || document;        //若没有给root，赋值document
    switch (selector.charAt(0)) {   //charAt() 方法可返回指定位置的字符。
    case "#":                       //id选择器
        elements.push(root.getElementById(selector.substring(1))); //push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
        break;
    case ".":                       //class选择器
        if (root.getElementsByClassName) { //标准
            elements = root.getElementsByClassName(selector.substring(1));//substring() 方法用于提取字符串中介于两个指定下标之间的字符。
        } else {                    //兼容低版本浏览器
            var reg = new RegExp("\\b" + selector.substring(1) + "\\b");
            allChildren = root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++) {
                if (reg.test(allChildren[i].className)) {
                    elements.push(allChildren[i]);
                }
            }
        }
        break;
    case "[":                       //属性选择器
                                    // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        if (selector.indexOf("=") === -1) {
        //只有属性没有值的情况
            allChildren = root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++) {
                if (allChildren[i].getAttribute(selector.slice(1, -1)) !== null) {
                    elements.push(allChildren[i]);
                }
            }
        } else {
        //既有属性又有值的情况
            var index = selector.indexOf("="); //缓存=出现的索引位置。
            allChildren = root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++) {
                if (allChildren[i].getAttribute(selector.slice(1, index)) === selector.slice(index + 1, -1)) {
                    elements.push(allChildren[i]);
                }
            }
        }
        break;
    default:                        //tagName
        elements = root.getElementsByTagName(selector);
    }
    return elements
}
/**
 * 模仿jQuery的迷你$选择符。
 * @param   {string} selector CSS方式的选择器，支持简单的后代选择器（只支持一级）
 * @returns {object} 返回获取到的第一个节点对象，后代选择器时，返回第一个对象中的第一个符合条件的对象
 */
function $(selector) {
//这里trim处理输入时两端出现空格的情况，支持ie9+。但是这个函数实现起来也特别简单，可以参考我task0002（-）前面有trim函数的实现。稍微修改一下，这样就没兼容性问题了。
    if (selector == document) {
        return document;
    }
    selector = selector.trim();
    //存在空格时，使用后代选择器
    // selector去除前后空格后，若是字符串里面还有空格
    if (selector.indexOf(" ") !== -1) {
        var selectorArr = selector.split(/\s+/); //分割成数组，第一项为parent，第二项为chlid。
        //这里没去考虑特别多的情况了，只是简单的把参数传入。
        return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
    } else { //普通情况,只返回获取到的第一个对象
        return VQuery(selector,document)[0];
    }
}

function vq(selector,root) {
    var elementList = [];
    var allChildren = null;
    root = root || document;
    switch (selector.charAt(0)) {
    case "#":
        elementList.push(root.getElementById(selector.substring(1)));
        break;
    case ".":
        if (root.getElementsByClassName){ //如果浏览器支持
            elementList.push(root.getElementsByClassName(selector.substring(1)));
        }else {
            var reg =new RegExp("\\b" + selector.substring(1) + "\\b");
            allChildren = root.getElementsByClassName("*");
            for (var i = 0, len = allChildren.length; i < len; i++ ) {
                if (reg.test(allChildren[i].className)) {
                    elementList.push(allChildren[i])
                }
            }
        }
        break;
    case "[":
        if (selector.indexOf("=") === -1) {
            allChildren = root.getElementsByClassName("*");
            for (var i = 0,len = allChildren.length; i < len; i++){
                if (allChildren[i].getAttribute(selector.slice(1,-1))!== null) {
                    elementList.push(allChildren[i]);
                }
            }            
        } else {
            var indexN = selector.indexOf("=");
            allChildren =root.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++){
                if (allChildren[i].getAttribute(selector,selector.slice(1,indexN)) === selector.slice(indexN + 1,-1)){
                    elementList.push(allChildren[i])
                }
            }
        }
        break;
    default:                        //tagName
    elements = root.getElementsByTagName(selector);
    }
    return elementList;
}
function $(selector) {
    if (selector == document){
        return document; 
    }
    selector = selector.trim()
    if (selector.indexOf(" ") !== -1) {
        var selectorArr = selector.split(/\s+/); 
        return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
    } else { 
        return VQuery(selector,document)[0];
    }
}


// 事件
// 这里的addEvent()函数到了最后做大作业的时候会出现bug(暂时不能解决)
// 给一个element绑定一个针对event事件的响应，响应函数为listener
// function addEvent(element, event, listener) {
//     element = element.trim();
//     switch(element.charAt(0)) {
//         case "#":
//             document.getElementById(element.substring(1)).addEventListener(event,listener,false);
//             break;
//         case ".":
//             var classAdd = document.getElementsByClassName(element.substring(1))
//             for(i = 0; i < classAdd.length; i++){
//                 classAdd[i].addEventListener(event,listener,false);
//             }
//             break;
//         case "[":
//         if (element.indexOf("=") === -1) {
//             allChildren = document.getElementsByClassName("*");
//             for (var i = 0,len = allChildren.length; i < len; i++){
//                 if (allChildren[i].getAttribute(element.slice(1,-1))!== null) {
//                    allChildren[i].addEventListener(event,listener,false) ;
//                 }
//             }            
//         } else {
//             var indexN = element.indexOf("=");
//             allChildren =document.getElementsByTagName("*");
//             for (var i = 0, len = allChildren.length; i < len; i++){
//                 if (allChildren[i].getAttribute(element,element.slice(1,indexN)) === element.slice(indexN + 1,-1)){
//                     allChildren[i].addEventListener(event,listener,false);
//                 }
//             }
//         }
//         break;
//         default:                        //tagName
//             var allChildren = document.getElementsByTagName(element);
//             for (i = 0; i < allChildren.length; i++) {
//                 allChildren[i].addEventListener(event,listener,false)
//             }
//     }
//  }

function addEvent(element, event, listener) {
    if (element.addEventListener) { //标准
        element.addEventListener(event, listener, false);
    } else if (element.attachEvent) { //低版本ie
        element.attachEvent("on" + event, listener);
    } else { //都不行的情况
        element["on" + event] = listener;
    }
}
// 测试用例
function myFunction() {
    document.getElementById("demo").style.color = "red";
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    element = element.trim()
    switch(element.charAt(0)) {
        case "#":
            document.getElementById(element.substring(1)).removeEventListenr(event,listener,false);
            break;
        case ".":
            var classAdd = document.getElementsByClassName(element.substring(1))
            for(i = 0; i < classAdd.length; i++){
                classAdd[i].removeEventListenr(event,listener,false);
            }
            break;
        case "[":
        if (element.indexOf("=") === -1) {
            allChildren = document.getElementsByClassName("*");
            for (var i = 0,len = allChildren.length; i < len; i++){
                if (allChildren[i].getAttribute(element.slice(1,-1))!== null) {
                   allChildren[i].removeEventListenr(event,listener,false) ;
                }
            }            
        } else {
            var indexN = element.indexOf("=");
            allChildren =document.getElementsByTagName("*");
            for (var i = 0, len = allChildren.length; i < len; i++){
                if (allChildren[i].getAttribute(element,element.slice(1,indexN)) === element.slice(indexN + 1,-1)){
                    allChildren[i].removeEventListenr(event,listener,false);
                }
            }
        }
        break;
        default:                        //tagName
            var allChildren = document.getElementsByTagName(element);
            for (i = 0; i < allChildren.length; i++) {
                allChildren[i].removeEventListenr(event,listener,false)
            }
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function (ev) {
    //兼容性处理。
    // 这一句这么写是要兼容各个浏览器，
    // 在FireFox浏览器中，事件绑定的函数要获取到事件本身，需要从函数中传入，而IE等浏览器则可以直接使用event或者window.event得到事件本身。
        var oEvent = ev || window.event;
        if (oEvent.keyCode === 13) {
            listener();
        }
    });
}
// Enter事件，这里主要考察的键盘的事件的触发。
//  keydown事件：在键盘按下时触发.
//  keyup事件：在按键释放时触发,也就是你按下键盘起来后的事件
//  keypress事件：在敲击按键时触发,我们可以理解为按下并抬起同一个按键
//  keyCode属性：在键盘事件触发时，按下的键的值。值=13时，为Enter键。（需进行兼容处理）

// 把上面几个函数和$做一下结合，把他们变成$对象的一些方法
$.on = function (element, type, listener) {
    return addEvent(element, type, listener);
};
$.un = function (element, type, listener) {
    return removeEvent(element, type, listener);
};
$.click = function (element, listener) {
    return addClickEvent(element, listener);
}
$.enter = function (element, listener) {
    return addEnterEvent(element, listener);
};

function delegateEvent(element, tag, eventName, listener) {
    return addEvent(element, eventName, function (ev) {
        var oEvent = ev || event; //兼容处理
        var target = oEvent.target || oEvent.srcElement; //兼容处理
        if (target.tagName.toLocaleLowerCase() === tag) {
            listener.call(target, oEvent); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
        }
    })
}
$.on = function(selector, event, listener) {
    return addEvent($(selector),event,listener);
}

$.click = function(selector, listener) {
    return addClickEvent($(selector),listener);
}

$.un = function(selector, event, listener) {
    return removeEvent($(selector),event,listener);
}

$.delegate = function(selector,tag,event,listener) {
    return delegateEvent($(selector),tag,event,listener);
}
// $.delegate($("#list"), "li", "click", clickHandle);


// BOM

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    var uUserAgent = navigator.userAgent; //保存浏览器的userAgent
    var ieAgent = uUserAgent.match(/msie (\d+.\d+)/i);
    if (ieAgent) {
        return ieAgent[1];
    } else {
        if (uUserAgent.match(/Trident\/7.0;/i)) { //处理到ie11.
            ieAgent = uUserAgent.match(/rv:(\d+.\d+)/i);
            return ieAgent[1];
        }
        return -1; //不是ie浏览器。
    }
}

/**
 * 设置cookie
 * @param {String} cookieName  设置cookie名
 * @param {String} cookieValue 对对应的cookie名
 * @param {Number} expiredays  过期的时间(多少天后)
 */
function setCookie(cookieName, cookieValue, expiredays) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + expiredays);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + oDate;
}

 /**
 * 获取cookie
 * @param   {String} cookieName 待寻找的cookie名
 * @returns {String} 返回寻找到的cookie值,无时为空
 */
function getCookie(cookieName) {
    var arr = document.cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == cookieName) {
            return arr2[1];
        }
    }
    return "";
}

/**
 * 删除cookie
 * @param {String} cookieName 待删除的cookie名
 */
function removeCookie(cookieName) {
    setCookie(cookieName, "1", -1)
}

/**
 * AJAX函数封装
 * @param {string} url     请求地址（必须）
 * @param {object} options 发送请求的选项参数
 *   @config {string} [options.type] 请求发送的类型。默认为GET。
 *   @config {Object} [options.data] 需要发送的数据。
 *   @config {Function} [options.onsuccess] 请求成功时触发，function(oAjax.responseText, oAjax)。（必须）
 *   @config {Function} [options.onfail] 请求失败时触发，function(oAjax)。(oAJax为XMLHttpRequest对象)
 *
 *@returns {XMLHttpRequest} 发送请求的XMLHttpRequest对象
 */
function ajax(url, options) {
    //1.创建ajax对象
    var oAjax = null;
        /**
         * 此处必须需要使用window.的方式,表示为window对象的一个属性.不存在时值为undefined,进入else
         * 若直接使用XMLHttpRequest,在不支持的情况下会报错
         **/
    if (window.XMLHttpRequest) {
        //IE6以上
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //2.连接服务器
    //open(方法,url,是否异步)
    var param = ""; //请求参数。
    //只有data存在，且为对象使才执行
    var data = options.data ? options.data : -1; //缓存data
    if (typeof (data) === "object") {
        for (var key in data) { //请求参数拼接
            if (data.hasOwnProperty(key)) {
                param += key + "=" + data[key] + "&";
            }
        }
        param.replace(/&$/, "");
    } else {
        param = "timestamp=" + new Date().getTime();
    }

    //3.发送请求
    var type = options.type ? options.type.toUpperCase() : "GET";
    if (type === "GET") {
        oAjax.open("GET", url + "?" + param, true);
        oAjax.send();
    } else {
        oAjax.open("POST", url, true);
        oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oAjax.send(param);
    }

    //4.接收返回
    //OnRedayStateChange事件
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState === 4) {
            if (oAjax.status === 200) {
                //请求成功。形参为获取到的字符串形式的响应数据
                options.onsuccess(oAjax.responseText, oAjax);
            } else {
                //先判断是否存在请求失败函数
                //存在时，形参为XMLHttpRequest对象，便于进行错误进行处理
                if (options.onfail) {
                    options.onfail(oAjax);
                }
            }
        }
    };
    return oAjax;//发送请求的XMLHttpRequest对象
}
// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);