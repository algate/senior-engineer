// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 定义一对值分别为 string 和 number 的元组：
let tomTuple: [string, number] = ['Tom', 25];

// let tomTuple: [string, number];
tomTuple[0] = 'Tom';
tomTuple[1] = 25;
tomTuple[0].slice(1);
tomTuple[1].toFixed(2);

// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
let tomTuple2: [string, number];
tomTuple2 = ['Tom', 25];
/* let tomTuple3: [string, number];
tomTuple3 = ['Tom']; */

// 越界的元素
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
let tomTuple4: [string, number];
tomTuple4 = ['Tom', 25];
tomTuple4.push('male');
// tomTuple4.push(true);