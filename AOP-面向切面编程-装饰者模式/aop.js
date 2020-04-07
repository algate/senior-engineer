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

// 插件式的表单验证
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var submitBtn = document.querySelector('#submitBtn');
/* var formSubmit = function() {
    if (username.value === "") {
        return console.info('用户名不能为空');
    }
    if (password.value === '') {
        return console.info('密码不能为空');
    }
    var params = {
        username: username.value,
        password: password.value
    }
    // ajax('http://', params);
}*/
submitBtn.onclick = function(argument) {
    formSubmit();
}

var validata = function() {
    if (username.value === '') {
        alert('用户名不能为空');
        return false;
    }
    if (password.value === '') {
        alert('密码不能为空');
        return false;
    }
}
/* var formSubmit = function() {
    if (validata() === false) { // 校验未通过
        return;
    }
    var param = {
        username: username.value,
        password: password.value
    }
    // ajax('http:// xxx.com/login', param);
}*/
var formSubmit = function() {
    var param = {
        username: username.value,
        password: password.value
    }
    console.info(param);
    // ajax('http:// xxx.com/login', param);
}
formSubmit = formSubmit.before(validata);
submitBtn.onclick = function() {
    formSubmit();
}
/* 在这段代码中，校验输入和提交表单的代码完全分离开来，它们不再有任何耦合关系，
formSubmit = formSubmit.before( validata )这句代码，如同把校验规则动态接在 formSubmit 函数
之前，validata 成为一个即插即用的函数，它甚至可以被写成配置文件的形式，这有利于我们分
开维护这两个函数。再利用策略模式稍加改造，我们就可以把这些校验规则都写成插件的形式，
用在不同的项目当中。*/
