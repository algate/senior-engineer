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
    return function() {
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
        timer = setTimeout(function() {
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
