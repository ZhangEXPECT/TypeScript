"use strict";
(function () {
    const obj = {
        name: '路西法',
        age: 20
    };
    // 接口的实现就是使类满足接口的需求
    class MyClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
})();
