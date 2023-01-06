
/* 注1: 定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定） */

/* 
*  function fn(a:any):any{
*   return a;
*    } 
*/

// 单个泛型
function fn<T>(a:T):T{
    return a;
}
// 类型会由TS自动推断出来
console.log(fn(10));


// 指定类型
console.log(fn<string>('路西'));


// 多个泛型
function multiFn<T,K>(a:T,b:K):K{
    return b;
}

console.log(multiFn<number,string>(20,'路飞'));


// 泛型作为interface的实现类

interface Inter{
    length:number;
}


function interFn<T extends Inter>(a:T):number{
    return a.length;
}

console.log(interFn('123456'));


// 类中泛型
class PageBeans<T>{
    data:T;

    getData(){
        return this.data;
    }

    setData(value:T){
        this.data = value;
    }

    constructor(data:T){
        this.data = data;
    }
}

const page = new PageBeans<object>([1,2,3,4,5,6,7,8,9])

