# AOP 面向切面编程
AOP是对OOP的一个横向的补充，主要作用是把一些业务无关的功能抽离，例如日志打印、统计数据、安全控制、异常处理等。这些功能都与核心业务无关，但又随处可见。将其抽离出来用动态插入的方式嵌入到各业务逻辑中。好处是业务模块可变得比较干净、不受污染，同时功能点能够得到很好的复用，给模块解耦。

1.业务模块之前或者之后执行一些与业务无关的功能抽离
```javascript
Function.prototype.before = function(beforeFn) {
    let __self = this;
    /* beforeFn.apply(this, arguments);
    __self.apply(this, arguments);
    return __self */
    return function() {
        beforeFn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}
```
```javascript
Function.prototype.after = function(afterFn){
    let __self = this;
    /* __self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return __self; */
    return function() {
        let result = __self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return result;
    }
}
```