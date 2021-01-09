// 1.固定传入参数，参数够了才执行
// 初步封装
var currying = function (fn) {
    // args 获取第一个方法内的全部参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function () {
        // 将后面方法里的全部参数和args进行合并
        var newArgs = args.concat(Array.prototype.slice.call(arguments))
        // 把合并后的参数通过apply作为fn的参数并执行
        return fn.apply(this, newArgs)
    }
}
// 或者
// 1.1 待柯里化处理的函数
let sum = (a, b, c, d) => {
    return a + b + c + d
}
// 柯里化函数，返回一个被处理过的函数 
let curry = (fn, ...arr) => { // arr 记录已有参数
    var len = fn.length; //计算期望函数的参数长度
    return (...args) => { // args 接收新参数
        const combArg = [...arr, ...args];
        if (len <= combArg.length) { // 参数够时，触发执行
            return fn(...combArg)
        } else { // 继续添加参数
            return curry(fn, ...combArg)
        }
    }
}
var sumPlus = curry(sum)
sumPlus(1)(2)(3)(4)
sumPlus(1, 2)(3)(4)
sumPlus(1, 2, 3)(4)

// 2.不固定传入参数，随时执行
// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function () {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}
// 或者
// 2.2 待柯里化处理的函数
let sum2 = arr => {
    return Array.isArray(arr) ? arr.reduce((a, b) => {
        return a + b;
    }, []): [arr];
}

let curry2 = (fn, ...arr) => {  // arr 记录已有参数
    return (...args) => {  // args 接收新参数
        if (args.length === 0) {  // 参数为空时，触发执行
            return fn(...arr, ...args)
        } else {  // 继续添加参数
            return curry2(fn, ...arr, ...args)
        }
    }
}

var sumPlus = curry2(sum2)
sumPlus(1)(2)(3)(4)()
sumPlus(1, 2)(3)(4)()
sumPlus(1, 2, 3)(4)()


// 3.实现一个add方法，使计算结果能够满足如下预期：
/*
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;
*/

function add() {
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

var a = add(1)(2)(3)(4)(5)(6, 7, 8)                // 6
// var b = add(1, 2, 3)(4)             // 10
// var c = add(1)(2)(3)(4)(5)          // 15
// var d = add(2, 6)(1)
// console.info(a, b, c, d);
console.log(a);  // 打印a的时候，隐式调用a上的toString()方法


/* 数组扁平化 */
// [1, [[2], [3, [4]], 5]] => [1,2,3,4,5]
const flattenDeep = (arr) => {
    return Array.isArray(arr) ? arr.reduce((a, b) => {
        return [...a, ...flattenDeep(b)];
    }, []) : [arr];
}
let flattenDeepData = flattenDeep([1, [[2], [3, [4]], 5]]);
console.log(flattenDeepData);