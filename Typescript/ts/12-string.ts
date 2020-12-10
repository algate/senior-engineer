// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}
let bodyString: HTMLElement = document.body;
handleEvent(bodyString, 'scroll');  // 没问题
// handleEvent(bodyString, 'dblclick'); // 报错，event 不能为 'dblclick'
/* handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick' */

// 类型别名与字符串字面量类型都是使用 type 进行定义。