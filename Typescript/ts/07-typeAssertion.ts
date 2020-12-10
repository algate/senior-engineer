// 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 1.值 as 类型
// 2.<类型>值
/* 
Array<number>
形如 <Foo> 的语法在 tsx 中表示的是一个 ReactNode，在 ts 中除了表示类型断言之外，也可能是表示一个泛型。
故建议大家在使用类型断言时，统一使用 值 as 类型 这样的语法，本书中也会贯彻这一思想。
 */

// 功能1.将一个联合类型断言为其中一个类型
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function getName(animal: Cat | Fish) {
    return animal.name;
}
// 有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法
interface Cat2 {
    name: string;
    run(): void;
}
interface Fish2 {
    name: string;
    swim(): void;
}
/* function isFish(animal: Cat2 | Fish2) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
} */
// 上面的例子中，获取 animal.swim 的时候会报错。
// 此时可以使用类型断言，将 animal 断言成 Fish
interface Cat3 {
    name: string;
    run(): void;
}
interface Fish3 {
    name: string;
    swim(): void;
}
function isFish2(animal: Cat3 | Fish3) {
    if (typeof (animal as Fish3).swim === 'function') {
        return true;
    }
    return false;
}
// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误
interface Cat4 {
    name: string;
    run(): void;
}
interface Fish4 {
    name: string;
    swim(): void;
}
function swim(animal: Cat4 | Fish4) {
    (animal as Fish4).swim();
}
const tomTypeAssertion: Cat4 = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tomTypeAssertion);
// 上面的例子编译时不会报错，但在运行时会报错：
// Uncaught TypeError: animal.swim is not a function`
/* 
原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。
*/

// 功能2.将一个父类断言为更加具体的子类
// 当类之间有继承关系时，类型断言也是很常见的：
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}
function isApiError1(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
/* 
上面的例子中，我们声明了函数 isApiError，它用来判断传入的参数是不是 ApiError 类型，为了实现这样一个函数，它的参数的类型肯定得是比较抽象的父类 Error，这样的话这个函数就能接受 Error 或它的子类作为参数了。
但是由于父类 Error 中没有 code 属性，故直接获取 error.code 会报错，需要使用类型断言获取 (error as ApiError).code。
大家可能会注意到，在这个例子中有一个更合适的方式来判断是不是 ApiError，那就是使用 instanceof：
*/
class ApiError2 extends Error {
    code: number = 0;
}
class HttpError2 extends Error {
    statusCode: number = 200;
}
function isApiError2(error: Error) {
    // error 是否为 ApiError2的实例
    if (error instanceof ApiError2) {
        return true;
    }
    return false;
}
/* 
上面的例子中，确实使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例。
但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了：
*/
interface ApiError3 extends Error {
    code: number;
}
interface HttpError3 extends Error {
    statusCode: number;
}
/* function isApiError3(error: Error) {
    // 'ApiError3' only refers to a type, but is being used as a value here.
    if (error instanceof ApiError3) {   // is interface not Class
        return true;
    }
    return false;
} */
// 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了：
interface ApiError4 extends Error {
    code: number;
}
interface HttpError4 extends Error {
    statusCode: number;
}

function isApiError4(error: Error) {
    if (typeof (error as ApiError4).code === 'number') {
        return true;
    }
    return false;
}
// 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了：
interface ApiError5 extends Error {
    code: number;
}
interface HttpError5 extends Error {
    statusCode: number;
}
function isApiError(error: Error) {
    if (typeof (error as ApiError5).code === 'number') {
        return true;
    }
    return false;
}

// 功能3.将任何一个类型断言为 any
// TypeScript 的类型系统运转良好，每个值的类型都具体而精确。
// 当我们引用一个在此类型上不存在的属性或方法时，就会报错：
const foo: number = 1;
// foo.length = 1;    // Property 'length' does not exist on type 'number'.  
// 有的时候，我们非常确定这段代码不会出错，比如下面这个例子：
// window.foo = 1;     // Property 'foo' does not exist on type 'Window & typeof globalThis'.
// 上面的例子中，我们需要将 window 上添加一个属性 foo，但 TypeScript 编译时会报错，提示我们 window 上不存在 foo 属性。
// 此时我们可以使用 as any 临时将 window 断言为 any 类型：
(window as any).foo = 1;
// 在 any 类型的变量上，访问任何属性都是允许的。

/* 
需要注意的是，将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。
它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。
一方面不能滥用 as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡
*/

// 功能4.将 any 断言为一个具体的类型
/* 
在日常的开发中，我们不可避免的需要处理 any 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 TypeScript 类型系统的限制而无法精确定义类型的场景。

遇到 any 类型的变量时，我们可以选择无视它，任由它滋生更多的 any。

我们也可以选择改进它，通过类型断言及时的把 any 断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展。
*/
// 举例来说，历史遗留的代码中有个 getCacheData，它的返回值是 any：
function getCacheData(key: string): any {
    return (window as any).cache[key];
}
// 那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：
function getCacheData2(key: string): any {
    return (window as any).cache[key];
}
interface Cat {
    name: string;
    run(): void;
}
const tomTypeAssertion2 = getCacheData2('tom') as Cat;
tomTypeAssertion2.run();
// 上面的例子中，我们调用完 getCacheData 之后，立即将它断言为 Cat 类型。这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，提高了代码的可维护性。

// 类型断言的限制
interface Animal {
    name: string;
}
interface Cat1 {
    name: string;
    run(): void;
}
let tomTypeAssertion3: Cat1 = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal: Animal = tomTypeAssertion3;
// 等价于
interface Animal1 {
    name: string;
}
interface Cat1 extends Animal1 {
    run(): void;
}
// 当 Animal 兼容 Cat 时，它们就可以互相进行类型断言了：
interface Animal2 {
    name: string;
}
interface Cat2 {
    name: string;
    run(): void;
}
function testAnimal(animal: Animal2) {
    return (animal as Cat2);
}
function testCat(cat: Cat2) {
    return (cat as Animal2);
}
// 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

// 功能5.双重断言
// 除非迫不得已，千万别用双重断言

// a.类型断言 vs 类型转换
// a-1.类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除
// a-2.类型断言不是类型转换，它不会真的影响到变量的类型。
// b.类型断言 vs 类型声明
// b-1.类型声明是比类型断言更加严格的
// b-2.我们最好优先使用类型声明，这也比类型断言的 as 语法更加优雅
function getCacheData3(key: string): any {
    return (window as any).cache[key];
}
interface Cat3 {
    name: string;
    run(): void;
}
const tomTypeAssertion4 = getCacheData3('tom') as Cat3;
tomTypeAssertion4.run();
// ===
function getCacheData4(key: string): any {
    return (window as any).cache[key];
}
interface Cat {
    name: string;
    run(): void;
}
const tomTypeAssertion5: Cat = getCacheData4('tom');
tomTypeAssertion5.run();
// c.类型断言 vs 泛型
function getCacheData6(key: string): any {
    return (window as any).cache[key];
}
interface Cat6 {
    name: string;
    run(): void;
}
const tomTypeAssertion6 = getCacheData6('tom') as Cat;
tomTypeAssertion6.run();
// 我们还有第三种方式可以解决这个问题，那就是泛型：
function getCacheData7<T>(key: string): T {
    return (window as any).cache[key];
}
interface Cat7 {
    name: string;
    run(): void;
}
const tomTypeAssertion7 = getCacheData7<Cat7>('tom');
tomTypeAssertion7.run();
// 通过给 getCacheData 函数添加了一个泛型 <T>，我们可以更加规范的实现对 getCacheData 返回值的约束，这也同时去除掉了代码中的 any，是最优的一个解决方案