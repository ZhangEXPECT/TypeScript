// 1.字面量声明
let a: 'male' | 'female';

// 2.联合类型
let b: boolean | string;
b = true;
b = 'hello'

// 3. 任意类型 any （不安全）
// let c;
let c: any;
// 4. let c:unknown; //未知类型，类型安全的any
c = 'hello'
let d: string
d = c;// any类型的字体赋值时会影响其他变量


d = c as string; //类型断言
d = <string>c;

// 4. 函数void,never
function type(): void {
    return null || undefined //返回空值或无返回值,never 无返回值
}

// 5. 定义对象Object
let e: { name: string, age?: number, [propName: string]: any } //指定对象属性 
e = { name: '路飞', age: 18 };
e = { name: '索隆', age: 25, knife: '秋水' };


// 6. 定义函数function
let f: (a: number, b: number) => number  //定义函数规范
f = function (a, b) {
    return a + b
}

// 7. 定义数组
let arr1: string[];
let arr2: Array<string>;

// 8. 定义元组：固定长度的数组
let arr3: [string, string];

// 9. 定义枚举
enum Gender {
    Male = 0,
    Feamle = 1
};


// 10. 类型的别名
type myType = 1|2|3|6|9|8
let h:myType
