// 1.声明一个变量a，指定为数字类型
var a;
a = 10;
// a = 'hello';  //报错
// 2.变量的声明和赋值是同时进行的，ts自动检测
var b = false;
b = true;
// 3.ts定义函数的参数及返回值
function sum(a, b) {
    return a + b;
}
console.log(sum(100, 20));
