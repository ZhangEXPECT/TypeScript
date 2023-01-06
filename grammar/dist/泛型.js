"use strict";
/* 注1: 定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定） */
/*
*  function fn(a:any):any{
*   return a;
*    }
*/
// 单个泛型
function fn(a) {
    return a;
}
// 类型会由TS自动推断出来
console.log(fn(10));
// 指定类型
console.log(fn('路西'));
// 多个泛型
function multiFn(a, b) {
    return b;
}
console.log(multiFn(20, '路飞'));
function interFn(a) {
    return a.length;
}
console.log(interFn('123456'));
