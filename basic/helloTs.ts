// 1.声明一个变量a，指定为数字类型
let a:number; 
a = 10;
// a = 'hello';  //报错


// 2.变量的声明和赋值是同时进行的，ts自动类型判断
let b = false;
b = true;

// 3.ts定义函数的参数及返回值
function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(100,20));







