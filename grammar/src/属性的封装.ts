(function () {
    class Person {

        // public 属性 在任意位置可访问
        
        /* 
        *   private 私有属性 内部访问 
        *   
        *   在类中定义相关属性的get,set方法提供给外部访问
        * 
        *   protected 受包含的属性,在当前类和子类中可访问
        */
        private name: string;
        private age: number;


        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;           
        }


        // getName(){
        //     return this.name;
        // }
        // setName(name:string){
        //     this.name = name;
        // }

        // TS中的getter、setter
        get _name(){
            return this.name;
        }

        set _name(value:string){
            this.name = value
        }
    }


    const p = new Person('路飞',18);
    // p.setName('路西')
    p._name; //调用get方法,
    console.log(p);



})()