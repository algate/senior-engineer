/*
 * 函数节流：在极少数情况下，函数的触发不是由用户直接出发的。在这些情况下，函数有可能被频繁的调用，造成大的性能问题①函数被频繁调用的场景
 * Ⅰwindow.resize;
 * Ⅱmousemove事件;
 * Ⅲ上传进度;
*/
/*
 * 函数节流：频繁触发，只在特定的时间内执行一次，continue继续执行完;
 */
function throttle(fn, interval) {
    let _self = fn,
        timer,
        firstTime = true
    return function () {
        let args = arguments
        _me = this
        if (firstTime) {
            //第一次无需延迟
            _self.apply(_me, args)
            return firstTime = false
        }
        if (timer) {
            //计时器在，不执行
            return false
        }
        timer = setTimeout(function () {
            clearTimeout(timer)
            timer = null
            firstTime = true
            _self.apply(_me, args)
        }, interval || 1000)
    }
}

window.onresize = throttle(() => {
    console.log(`throttle: ok!`);
})


/* 进阶版 */
/**
 * underscore 节流函数，返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  function   func      回调函数
 * @param  number     wait      表示时间窗口的间隔
 * @param  object     options   如果想忽略开始函数的的调用，传入{leading: false}。
 *                                如果想忽略结尾函数的调用，传入{trailing: false}
 *                                两者不能共存，否则函数不能执行
 * @return function             返回客户调用函数
 */
const throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 之前的时间戳
    var previous = 0;
    // 如果 options 没传则设为空对象
    if (!options) options = {};

    // 定时器回调函数
    var later = function () {
        // 如果设置了 leading，就将 previous 设为 0
        // 用于下面函数的第一个 if 判断
        previous = options.leading === false ? 0 : Date.now();
        // 置空一是为了防止内存泄漏，二是为了下面的定时器判断
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    return function () {
        // 获得当前时间戳
        var now = Date.now();
        // 首次进入前者肯定为 true
        // 如果需要第一次不执行函数
        // 就将上次时间戳设为当前的
        // 这样在接下来计算 remaining 的值时会大于0
        if (!previous && options.leading === false) previous = now;
        // 计算剩余时间
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;

        // 如果当前调用已经大于上次调用时间 + wait
        // 或者用户手动调了时间
        // 如果设置了 trailing，只会进入这个条件
        // 如果没有设置 leading，那么第一次会进入这个条件
        // 还有一点，你可能会觉得开启了定时器那么应该不会进入这个 if 条件了
        // 其实还是会进入的，因为定时器的延时
        // 并不是准确的时间，很可能你设置了2秒
        // 但是他需要2.2秒才触发，这时候就会进入这个条件
        if (remaining <= 0 || remaining > wait) {
            // 如果存在定时器就清理掉否则会调用二次回调
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            // 判断是否设置了定时器和 trailing
            // 没有的话就开启一个定时器
            // 并且不能不能同时设置 leading 和 trailing
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};