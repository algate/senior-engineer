/*
 * 触发事件后，在n秒内函数只能执行一次，如果触发事件后在n秒内又触发了事件，则会重新计算函数延执行时间。
 * ①搜索框搜索输入。只需用户最后一次输入完，再发送请求;
 * ②用户名、手机号、邮箱输入验证;
 * ③浏览器窗口大小改变后,只需窗口调整完后,再执行resize事件中的代码,防止重复渲染;
 */
/*
 * 函数防抖: 频繁触发, 但只在特定的时间内才执行一次代码，如果特定时间内重新触发，break打断之后重新开始执行;
*/
function debounce(fn,wait){
    var timer = null;
    return function(){
        if(timer !== null){
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}

function handle(){
    console.log(`debounce: ${Math.random()}`);
}

window.addEventListener("resize", debounce(handle, 1000));
