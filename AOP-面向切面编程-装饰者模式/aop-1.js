/*
AOP是对OOP的一个横向的补充，主要作用是把一些业务无关的功能抽离，例如日志打印、统计数据、安全控制、异常处理等。这些功能都与核心业务无关，但又随处可见。将其抽离出来用动态插入的方式嵌入到各业务逻辑中。好处是业务模块可变得比较干净、不受污染，同时功能点能够得到很好的复用，给模块解耦。
*/

/*
 * 在JS中AOP是一个严重被忽视的技术点，AOP在JS中可有以下妙用：

 * 1.防止window.onload被二次覆盖
 * 2.无侵入的统计代码
 * 3.分离表单请求和校验
 * 4.给AJAX请求动态添加参数
 * 5.职责链模式
 * 6.组合替代继承
*/

Function.prototype.before = function(beforeFn) {
    var __self = this;
    /* beforeFn.apply(this, arguments);
    __self.apply(this, arguments);
    return __self; */
    return function() {
        // apply 参数是个list[]; call 参数为...arguments
        beforeFn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}
Function.prototype.after = function(afterFn) {
    var __self = this;
    /* __self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return __self; */
    return function() {
        var result = __self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return result;
    }
}
/* 函数执行顺序 */
var func = function() {
    console.log('func', `ing……: 2`)
    setTimeout(() => {
        console.log('func-setTimeout', `timeout: 2.5`)
    }, 1000);
}

func = func.before(() => {
    console.log('AOP-before', `before: 1`);
}).after(() => {
    console.log('AOP-after', `after: 3`);
});

func();
