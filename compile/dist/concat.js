System.register("mo", [], function (exports_1, context_1) {
    "use strict";
    var hi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = '你好');
        }
    };
});
System.register("app", ["mo"], function (exports_2, context_2) {
    "use strict";
    var mo_1, a;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (mo_1_1) {
                mo_1 = mo_1_1;
            }
        ],
        execute: function () {
            console.log(mo_1.hi);
        }
    };
});
