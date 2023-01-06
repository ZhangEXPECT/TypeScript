"use strict";
(function () {
    class Person {
        constructor(name, age) {
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
        get _name() {
            return this.name;
        }
        set _name(value) {
            this.name = value;
        }
    }
    const p = new Person('路飞', 18);
    // p.setName('路西')
    p._name; //调用get方法,
    console.log(p);
})();
