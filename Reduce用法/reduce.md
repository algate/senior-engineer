# reduce()方法详解
```javascript
/* 
-[1] callback （执行数组中每个值的函数，包含四个参数):
	-[1.1] previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
	-[1.2] currentValue （数组中当前被处理的元素）
	-[1.3] index （当前元素在数组中的索引）
	-[1.4] array （调用 reduce 的数组）
-[2] initialValue （作为第一次调用 callback 的第一个参数。） 
*/
arr.reduce(callback,[initialValue])
// 如下：
arr.reduce((previousValue, currentValue, index, array) => {
    /* 
    -[1.1] previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
	-[1.2] currentValue （数组中当前被处理的元素）
	-[1.3] index （当前元素在数组中的索引）
    -[1.4] array （调用 reduce 的数组）
     */
}, initialValue);
```

# 使用

## 数组扁平化
```javascript
const flattenDeep = (arr) => {
    return Array.isArray(arr) ? arr.reduce((a, b) => {
        return [...a, ...flattenDeep(b)];
    }, []) : [arr];
    /* 
     * 写成下边这种，会报错; 通过打印的arr可以看出来;
     arr.reduce((a, b) => {
        return [...a, ...flattenDeep(b)];
    }, [])
    */
}
let flattenDeepData = flattenDeep([1, [[2], [3, [4]], 5]]);
console.log(flattenDeepData);
```

## 函数柯里化处理
```javascript
let sum2 = arr => {
    return Array.isArray(arr) ? arr.reduce((a, b) => {
        return a + b;
    }, []): [arr];
}
let curry2 = (fn, ...arr) => {  // arr 记录已有参数
    return (...args) => {  // args 接收新参数
        if (args.length === 0) {  // 参数为空时，触发执行
            return fn(...arr, ...args)
        } else {  // 继续添加参数
            return curry2(fn, ...arr, ...args)
        }
    }
}
var sumPlus = curry2(sum2)
sumPlus(1)(2)(3)(4)()
sumPlus(1, 2)(3)(4)()
sumPlus(1, 2, 3)(4)()
```