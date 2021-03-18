let _log = function(_data, joke = false) {
    if(!!_data && typeof _data === 'object') {
        if (joke) {
            // true - 模糊
            console.info(`%c${joke?'':'不'}害羞` + '%c - ' + JSON.stringify(_data), 'background: #2a3b4c; padding: 5px; color: #fff; border-radius: 2px', joke?'color: transparent;text-shadow:0px 0px 5px #000;':'');
        } else {
            console.info(`%c${joke?'':'不'}害羞`, `background: #2a3b4c; padding: 5px; color: #fff; border-radius: 2px${joke?'color: transparent;text-shadow:0px 0px 5px #000;':''}`, _data);
        }
    } else {
        console.info(`%c${joke?'':'不'}害羞` + '%c - ' + _data, 'background: #2a3b4c; padding: 5px; color: #fff; border-radius: 2px', joke?'color: transparent;text-shadow:0px 0px 5px #000;':'');
    }
}
console = window.console || console;
console.log = (function(log) {
    return function (data) {
        try{
            log.call(console, ...arguments);
        } catch (e) {
            console.error(`console.log error`, e);
        }
    }
})(_log)
// 普通的add函数
function add(x, y) {
    return x + y
}

add(1,2);
//carry
function add (x) {
    return function(y) {
        return x + y;
    }
}
add(2)(3)
/* console.info(
    `%ccore-store-index.js：`,
    'background: #2a3b4c; padding: 5px; color: #fff; border-radius: 2px', 
    add(2)(3)
) */
console.log(add(2)(3))


function add2(...args) {
    return args.reduce((sums, i) => sums + i);
}
 
function carrying(fn, ...args1) {
    return function (...args2) {
        return fn.call(this, ...args1, ...args2);
    }
}
// carrying(add2,1)(2);
console.log(carrying(add2,1)(2))


function add3(...args) {
    return args.reduce((sums, i) => sums + i);
}
/* let add3 = (...arr) => {
    return Array.isArray(arr) ? arr.reduce((a, b) => {
        return a + b;
    }): [arr];
} */

let curry2 = (fn, ...arr) => {  // arr 记录已有参数
    return (...args) => {  // args 接收新参数
        if (args.length === 0) {  // 参数为空时，触发执行
            return fn(...arr, ...args)
        } else {  // 继续添加参数
            return curry2(fn, ...arr, ...args)
        }
    }
}

var currying2 = curry2(add3)
// var a2 = currying2(1)(2)(3)(4)()
var a2 = currying2(1)(2)(3, 4)()
console.log(a2);

function add4(x, y, z) {
    var args = [].slice.call(arguments);
    return args.reduce((sums, i) => sums + i);
}
var currying4 = function (fn, ...args1) {
    var args = [...args1] || [];
    return function () {
        args.push(...arguments);
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return arguments.callee;
        }
    }
};
 
var aa = currying4(add4)(1)(2,8)
// var aa = currying4(add2)(1)(2)(8)
console.log(aa);

function add5() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function () {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回 ==== 重写toString() 方法
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

var a = add5(1)(2)(3)(4)(5)(6, 7, 8)
console.log(a);

/* function add6(...args1) {
    var args = [...args1] || [];
    var innerfn = function (...args2) {
        args.push(...args2);
        return innerfn;
    }
    innerfn.valueOf = function () {
        return args.reduce((items, item) => items + item);
 
    }
    return innerfn;
} */