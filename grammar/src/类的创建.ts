/* 定义一个类 */

class Person {
    //static (readonly) job:string = '船长'; 静态属性，可通过Person.job访问而不需创建对象
    name: string;//实例属性
    age: number;


    /* 注1：在TS中只能有一个构造器方法  */
    constructor(name: string, age: number) { //构造方法  
        this.name = name;
        this.age = age;
    }

    sayHello() {  //类方法
        console.log(`I'm ${this.name},I'm ${this.age} years old`);
    }
}


/* 类的继承 */

/* 注2：子类继承父类时，如果子类中也要定义构造方法,则必须调用父类的构造方法！ */
class Student extends Person {

    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age);//不调用super将会报错！
        this.school = school;
    }

    saySchool() {
        console.log(`I'm ${this.name},I'm ${this.age} years old,I'm from ${this.school}`);
    }

    sayHello() {  //方法重写
        console.log(`Change:  I'm ${this.name},I'm ${this.age} years old`);
        // 通过super调用父级
        super.sayHello();
    }

}


/* 抽象类 */
/* 注3：抽象类是专门用来被其他类所继承的类,它只能被其他类所继承,不能用来创建实例 */
abstract class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 定义一个抽象方法,无方法体,子类必须重写
    abstract sayHello(): void;

}

class Dog extends Animal{
      
   
    constructor(name:string){
        super(name);
    }

    // 重写抽方发
    sayHello(){
        console.log(`I'm ${this.name} and I'm a Dog`);       
    }

}



// 使用类
const p = new Person('蒙奇D路飞', 20);
p.sayHello();
console.log('================');
const s = new Student('EXPECT', 21, 'ECJTU');
s.saySchool();
s.sayHello();
const d = new Dog("旺财");
d.sayHello();
