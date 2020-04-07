/*
AOP是对OOP的一个横向的补充，主要作用是把一些业务无关的功能抽离，例如日志打印、统计数据、安全控制、异常处理等。这些功能都与核心业务无关，但又随处可见。将其抽离出来用动态插入的方式嵌入到各业务逻辑中。好处是业务模块可变得比较干净、不受污染，同时功能点能够得到很好的复用，给模块解耦。
*/

/*
 * 在JS中AOP是一个严重被忽视的技术点，AOP在JS中可有以下妙用：

 * 1.防止window.onload被二次覆盖
 * 2.无侵入的统计代码
 * 3.分离表单请求和校验
 * 4.给AJAX请求动态添加参数和动态改变参数
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
        if(result === false) {
            return false;
        }
        afterFn.apply(this, arguments);
        return result;
    }
}

// 用AOP动态改变ajax请求的参数
/* 原始请求 */
/*var ajax = function(type, url, params) {
    console.info(params);
}
ajax('get', 'http://localhost', {params: {name: 'onions'}});*/

// 直到有一天，我们的网站遭受了CSRF的攻击。解决CSRF攻击的最简单的一个方法就是在HTTP请求中带上一个Token参数
/*var getToken = function() {
    return 'Token';
}
var ajax = (type, url, params) => {
    params = params || {};
    params.Token = getToken();
}*/
// 但是污染了ajax

var ajax = function(type, url, params) {
    console.info(params);
}
var getToken = function() {
    return 'Token';
}
ajax = ajax.before(function(type, url, params) {
    params.token = getToken();
});
ajax('post', 'http://localhost', {name: 'onions'});
