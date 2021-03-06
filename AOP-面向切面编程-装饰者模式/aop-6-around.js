/*
AOP是对OOP的一个横向的补充，主要作用是把一些业务无关的功能抽离，例如日志打印、统计数据、安全控制、异常处理等。这些功能都与核心业务无关，但又随处可见。将其抽离出来用动态插入的方式嵌入到各业务逻辑中。好处是业务模块可变得比较干净、不受污染，同时功能点能够得到很好的复用，给模块解耦。
*/

/*
 * 在JS中AOP是一个严重被忽视的技术点，AOP在JS中可有以下妙用：
 *
 * Node.js 日志log
 * 埋点、数据上报
 * 性能分析、统计函数执行时间
 * 给ajax请求动态添加参数、动态改变函数参数
 * 分离表单请求和验证
 * 防抖与节流

 * 1.防止window.onload被二次覆盖
 * 2.无侵入的统计代码
 * 3.分离表单请求和校验
 * 4.给AJAX请求动态添加参数
 * 5.职责链模式
 * 6.组合替代继承
*/
// AOP
// before和after切面可用当前函数公用this和arguments
// before切面，作用是让一个函数在另一个函数之前执行。
Function.prototype.before = function(beforeFn) {
    var __self = this;
    return function() {
        // beforeFn.apply(this, arguments) ---- （1）
        if (beforeFn.apply(this, arguments) === false) {
            return false;
        }
        // __self.apply(this, arguments) ---- （2）
        return __self.apply(this, arguments);
    }
}
// after切面，作用是让一个函数在另一个函数之后执行。
Function.prototype.after = function(afterFn) {
    var __self = this;
    return function() {
        var result = __self.apply(this, arguments);
        if (result === false) {
            return false;
        }
        afterFn.apply(this, arguments);
        return result;
    }
}

// Javascript aop(面向切面编程)之around(环绕) ---- before、after、around

// 用AOP动态改变函数的参数
/* advice = function(originalFunc) {
    return function() {
        console.log("before function");
        originalFunc();
        console.log("after function");
    }
}
var obj = {
    foo: function() {
        console.log(this.name);
    },
    name: "obj"
}*/

/*
obj.foo = advice(obj.foo)
obj.foo()
*/

/*
var exist = obj.foo;
keepContext = function() {
    return exist.call(obj);
}
obj.foo = advice(keepContext);
obj.foo();
*/

advice = function(originalFunc) {
    return function() {
        // before 操作
        console.log("before function");
        originalFunc();
        // after 操作
        console.log("after function");
    }
}
var obj = {
    foo: function() {
        console.log(this.name);
    },
    name: "obj"
}
function around(obj, prop, advice) {
    var exist = obj[prop];
    var advised = advice(function() {
        return exist.call(obj, arguments);
    });
    obj[prop] = advised;
}

around(obj, 'foo', advice);

obj.foo();
