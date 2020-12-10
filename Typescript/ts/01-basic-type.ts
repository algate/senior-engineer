/* 原始数据类型
原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
*/

// 布尔
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name1: string = "bob";
// let name: string = name1;
/* 1.Cannot redeclare block-scoped variable 'name'.
(1).将运行环境由 DOM typings 更改成其他运行环境。我们可以在 tsconfig.json 中做一下声明：
(2).既然与全局的变量出现重名，那我们将脚本封装到模块（module）内。module 有自己的作用域，自然不会与全局作用域的变量产生冲突。 */

// 空值
function alertName(): void {
    alert('My name is Tom');
    /* Cannot find name 'alert'
    name ok 之后，更改了运行环境
    */
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

// Null 和 Undefined
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错 ? 我本地启动报错 => (Type 'undefined' is not assignable to type 'number')
// let num: number = undefined; 
// 而 void 类型的变量不能赋值给 number 类型的变量：

let u2: void;
// let num2: number = u; // 我本地报错 => (Type 'undefined' is not assignable to type 'number')
// Type 'void' is not assignable to type 'number'.