// 在 TypeScript 中，数组类型有多种定义方式，比较灵活。
// 1.最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];

// let fibonacci1: number[] = [1, '1', 2, 3, 5];
// Type 'string' is not assignable to type 'number'.

// 2.我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 3.用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];
// NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字
// 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

// 4.类数组 (不过有一种情况例外，那就是它常用来表示类数组。)
// 类数组（Array-like Object）不是数组类型，比如 arguments：

/* function sum() {
    let args: number[] = arguments;
} */
// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
// 我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。
function sumarray1() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sumarray2() {
    let args: IArguments = arguments;
}
// 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
// 关于内置对象，可以参考内置对象一章。

// 5.any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];