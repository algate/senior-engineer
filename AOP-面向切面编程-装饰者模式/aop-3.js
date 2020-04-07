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
// AOP
// before和after切面可用当前函数公用this和arguments
// before切面，作用是让一个函数在另一个函数之前执行。
Function.prototype.before = function(beforeFn) {
    var __self = this;
    /* beforeFn.apply(this, arguments);
    __self.apply(this, arguments);
    return __self;*/
    return function() {
        if (beforeFn.apply(this, arguments) === false) {
            return false;
        }
        // beforeFn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}
// after切面，作用是让一个函数在另一个函数之后执行。
Function.prototype.after = function(afterFn) {
    var __self = this;
    /*__self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return __self;*/
    return function() {
        var result = __self.apply(this, arguments);
        if(result === false) {
            return false;
        }
        afterFn.apply(this, arguments);
        return result;
    }
}
// 处理window.onload被二次覆盖
/* 原始方法 */
/*window.onload = function() {
    console.info(1);
    console.info(2); // 坏处非常明显，需要改动原始代码，侵入性最强
}*/

// 使用中间变量保存以前的`window.onload`
/*window.onload = function() {
    console.info(1);
}
// 多出一个讨厌的中间变量__onload，管理它需要花费额外的成本。
// 如果需要装饰的函数变多，这些中间变量的数量也会越来越多。
var __onload = window.onload;
window.onload = function() {
    if (__onload) {
        __onload();
    }
    console.info(2);
}*/

window.onload = function(){
    console.info(1);
};
// 动态装饰体现优势，完全无侵入之前的函数。
window.onload = (window.onload || function(){}).after(function(){
    console.info(2);
}).after(window.onload).after(()=>{console.info(3)});
