(function(){

    
    // 描述一个对象的类型
    type  myType = {
        name:string;
        age:number
    };

    const obj:myType = {
        name:'路西法',
        age:20
    }

    /* 注1: 接口用来定义一个类结构，定义一个类中因该包含哪些属性和方法，接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法 */
    interface myInterface{
        name:string;
        age:number;
    }

    
    interface myInterface{  //可重复声明
        gender:string;
       
    }


    // 接口的实现就是使类满足接口的需求
    class MyClass implements myInterface{
        name: string;
        age: number;
        gender: string;

        constructor(name:string,age:number,gender:string){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        
    }






})()