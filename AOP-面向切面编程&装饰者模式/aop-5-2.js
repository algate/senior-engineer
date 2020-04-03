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

// 用AOP动态改变函数的参数
/*
 * 观察Function.prototype.before方法:
从这段代码的(1)处和(2)处可以看到,beforefn和原函数__self共用一组参数列表arguments,
当我们在beforefn的函数体内改变arguments的时候,
原函数__self接收的参数列表自然也会变化.
*/
// 如何通过Function.prototype.before方法给函数func的参数param动态地添加属性
var func = function(param) {
    console.log(param);
}
func = func.before(function(param) {
    param.b = 'b';
}).after(function(param){
    param.c = 'c';
});
func({a: "a"});

