// 函数声明
// 在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）：

// js函数声明（Function Declaration）
/* function sum(x, y) {
    return x + y;
} */

// js函数表达式（Function Expression）
/* let mySum = function (x, y) {
    return x + y;
}; */

// ts函数声明（Function Declaration）
// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number): number {
    return x + y;
}
// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
// sum(1, 2, 3);    // Expected 2 arguments, but got 3.
// sum(1);    // An argument for 'y' was not provided

// ts函数表达式（Function Expression）
let mySum = function (x: number, y: number): number {
    return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
/* 
注意不要混淆了 TypeScript 中的 => 和 ES6 中的 => 
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
在 ES6 中，=> 叫做箭头函数，应用十分广泛
 */

// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

// 可选参数
// 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
// 与接口中的可选属性类似，我们用 ? 表示可选的参数：
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tomfun = buildName('Tom');
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
let tomcat1 = buildName('Tom', 'Cat');
// let tomfun1 = buildName(undefined, 'Tom');

// 参数默认值
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tomfun2 = buildName2('Tom');
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName3(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat3 = buildName3('Tom', 'Cat');
let cat = buildName3(undefined, 'Cat');

// 剩余参数
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
/* function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a: any[] = [];
push(a, 1, 2, 3); */
// 事实上，items 是一个数组。所以我们可以用数组的类型来定义它：

function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a: any[] = [];    // let a = [];在ts中报错
push(a, 1, 2, 3);
// 注意，rest 参数只能是最后一个参数

// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// function reverse1(x: number | string): number | string {
    // Function lacks ending return statement and return type does not include 'undefined'
function reverse1(x: number | string): any {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
// 这时，我们可以使用重载定义多个 reverse 的函数类型：
function reverse(x: number): number;
function reverse(x: string): string;
// function reverse(x: number | string): number | string {
function reverse(x: number | string): any {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}