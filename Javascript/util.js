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
function isClass(o){
    return Object.prototype.toString.call(o).slice(8,-1);
}

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