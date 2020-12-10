// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
/* 
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
*/

// 几个概念

// 1.什么是声明语句
/* 
假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。
但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西
但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西1：

jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
这时，我们需要使用 declare var 来定义它的类型2：
declare var jQuery: (selector: string) => any;
jQuery('#foo');
*/
/* declare var jQuery: (selector: string) => any;
jQuery('#foo'); */

// 2.什么是声明文件
// 声明文件必需以 .d.ts 为后缀。
// ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。
/* 
我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件
*/
/* // src/jQuery.d.ts
declare var jQuery: (selector: string) => any;
// src/index.ts
jQuery('#foo'); */
/* 当然，jQuery 的声明文件不需要我们定义了，社区已经帮我们定义好了：jQuery in DefinitelyTyped。
我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件。
@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
npm install @types/jquery --save-dev */

// 3.书写声明文件
// 当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了
// 在不同的场景下，声明文件的内容和使用方式会有所区别。
/* 
全局变量：通过 <script> 标签引入第三方库，注入全局变量
npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入
直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构
在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
模块插件：通过 <script> 或 import 导入后，改变另一个模块的结构
*/

// 1.全局变量：
/* 
使用全局变量的声明文件时，如果是以 npm install @types/xxx --save-dev 安装的，则不需要任何配置。如果是将声明文件直接存放于当前项目中，则建议和其他源码一起放到 src 目录下（或者对应的源码目录下）：
/path/to/project
├── src
|  ├── index.ts
|  └── jQuery.d.ts
└── tsconfig.json、

全局变量的声明文件主要有以下几种语法：
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
*/

// ----------- declare var
// declare var 是最简单的，declare let 和 declare const，使用 let 与使用 var 没有什么区别

// src/jQuery.d.ts
/* declare let jQuery: (selector: string) => any;
// src/index.ts
jQuery('#foo');
// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
jQuery = function(selector) {
    return document.querySelector(selector);
}; */

/* // src/jQuery.d.ts
declare const jQuery: (selector: string) => any;
jQuery('#foo');
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
jQuery = function(selector) {
    return document.querySelector(selector);
}; */
// Cannot assign to 'jQuery' because it is a constant

// ---------- declare function
// declare function 用来定义全局函数的类型。jQuery 其实就是一个函数，所以也可以用 function 来定义：
/* // src/jQuery.d.ts
declare function jQuery(selector: string): any;
// src/index.ts
jQuery('#foo'); */
// 函数类型的声明语句中，函数重载也是支持的
// src/jQuery.d.ts
/* declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;
// src/index.ts
jQuery('#foo');
jQuery(function() {
    alert('Dom Ready!');
}); */

// ---------- declare class
// declare class 语句也只能用来定义类型，不能用来定义具体的实现
// src/Animal.d.ts
declare class AnimalClass {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
// src/index.ts
let catClass = new AnimalClass('Tom'); 

/* declare class Animal {
    name: string;
    constructor(name: string);
    sayHi() {
        return `My name is ${this.name}`;
    };
    // ERROR: An implementation cannot be declared in ambient contexts
} */

// ---------- declare enum
// declare enum 定义的枚举类型也称作外部枚举（Ambient Enums）
// src/Directions.d.ts
/* declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
// src/index.ts
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]; */

// ---------- declare namespace
// 故事：由于历史遗留原因，在早期还没有 ES6 的时候，ts 提供了一种模块化方案，使用 module 关键字表示内部模块。但由于后来 ES6 也使用了 module 关键字，ts 为了兼容 ES6，使用 namespace 替代了自己的 module，更名为命名空间。、
// 随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。
// namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。
// src/jQuery.d.ts
/* declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
// src/index.ts
jQuery.ajax('/api/get_something'); */
// 注意，在 declare namespace 内部，我们直接使用 function ajax 来声明函数，而不是使用 declare function ajax。类似的，也可以使用 const, class, enum 等语句
// src/jQuery.d.ts
/* declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }
}
// src/index.ts
jQuery.ajax('/api/get_something');
console.log(jQuery.version);
const e = new jQuery.Event();
e.blur(jQuery.EventType.CustomClick); */

// ---------- 嵌套的命名空间
// 如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型
/* // src/jQuery.d.ts
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    namespace fn {
        function extend(object: any): void;
    }
}
// src/index.ts
jQuery.ajax('/api/get_something');
jQuery.fn.extend({
    check: function() {
        return this.each(function() {
            this.checked = true;
        });
    }
}); */
// 假如 jQuery 下仅有 fn 这一个属性（没有 ajax 等其他属性或方法），则可以不需要嵌套 namespace
/* // src/jQuery.d.ts
declare namespace jQuery.fn {
    function extend(object: any): void;
}
// src/index.ts
jQuery.fn.extend({
    check: function() {
        return this.each(function() {
            this.checked = true;
        });
    }
}); */

// interface 和 type
// 可能有一些类型我们也希望能暴露出来。在类型声明文件中，我们可以直接使用 interface 或 type 来声明一个全局的接口或类型:
// src/jQuery.d.ts
/* interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
// src/index.ts
let settings: AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings); */
// 防止命名冲突 - 暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 namespace 下
// src/jQuery.d.ts
/* declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any;
    }
    function ajax(url: string, settings?: AjaxSettings): void;
}
// 在使用这个 interface 的时候，也应该加上 jQuery 前缀：
// src/index.ts
let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'foo'
    }
};
jQuery.ajax('/api/post_something', settings); */
// 声明合并
// jQuery 既是一个函数，可以直接被调用 jQuery('#foo')，又是一个对象，拥有子属性 jQuery.ajax()（事实确实如此），那么我们可以组合多个声明语句，它们会不冲突的合并起来
// src/jQuery.d.ts
declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
// src/index.ts
jQuery('#foo');
jQuery.ajax('/api/get_something');

// npm 包
/* 一般我们通过 import foo from 'foo' 导入一个 npm 包，这是符合 ES6 模块规范的。
在我们尝试给一个 npm 包创建声明文件之前，需要先看看它的声明文件是否已经存在。一般来说，npm 包的声明文件可能存在于两个地方 
*/
/* 
1.与该 npm 包绑定在一起。判断依据是 package.json 中有 types 字段，或者有一个 index.d.ts 声明文件。这种模式不需要额外安装其他包，是最为推荐的，所以以后我们自己创建 npm 包的时候，最好也将声明文件与 npm 包绑定在一起。
2.发布到 @types 里。我们只需要尝试安装一下对应的 @types 包就知道是否存在该声明文件，安装命令是 npm install @types/foo --save-dev。这种模式一般是由于 npm 包的维护者没有提供声明文件，所以只能由其他人将声明文件发布到 @types 里了。
 */
// 以上两种方式都没有找到对应的声明文件,我们就需要自己为它写声明文件了
// 由于是通过 import 语句导入的模块，所以声明文件存放的位置也有所约束，一般有两种方案：
/* 
1.创建一个 node_modules/@types/foo/index.d.ts 文件，存放 foo 模块的声明文件。这种方式不需要额外的配置，但是 node_modules 目录不稳定，代码也没有被保存到仓库中，无法回溯版本，有不小心被删除的风险，故不太建议用这种方案，一般只用作临时测试。
2.创建一个 types 目录，专门用来管理自己写的声明文件，将 foo 的声明文件放到 types/foo/index.d.ts 中。这种方式需要配置下 tsconfig.json 中的 paths 和 baseUrl 字段。
如下：
/path/to/project
├── src
|  └── index.ts
├── types
|  └── foo
|     └── index.d.ts
└── tsconfig.json
tsconfig.json 内容：
{
    "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
    }
}
*/

// npm 包的声明文件主要有以下几种语法：
/* 
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块 
*/
// export
// export 的语法与普通的 ts 中的语法类似，区别仅在于声明文件中禁止定义具体的实现
// types/foo/index.d.ts
/* export const name: string;
export function getName(): string;
export class Animal {
    constructor(name: string);
    sayHi(): string;
}
export enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data: any;
} */
// 对应的导入和使用模块应该是这样：
/* // src/index.ts
import { name, getName, Animal, Directions, Options } from 'foo';

console.log(name);
let myName = getName();
let cat = new Animal('Tom');
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
let options: Options = {
    data: {
        name: 'foo'
    }
}; */
// 混用 declare 和 export
/* declare const name2: string;
declare function getName(): string;
declare class Animal {
    constructor(name: string);
    sayHi(): string;
}
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
// 与全局变量的声明文件类似，interface 前是不需要 declare 的
interface Options {
    data: any;
}
export { name2, getName, Animal, Directions, Options }; */
// export namespace
// export default
// 在 ES6 模块系统中，使用 export default 可以导出一个默认值，使用方可以用 import foo from 'foo' 而不是 import { foo } from 'foo' 来导入这个默认值。
/* // types/foo/index.d.ts
export default function fooDeclare(): string;
// src/index.ts
import foo from 'fooDeclare';
foo(); */
// 只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出
// export =
/* 
在 commonjs 规范中，我们用以下方式来导出一个模块：
// 整体导出
module.exports = foo;
// 单个导出
exports.bar = bar;
*/
/* 
在 ts 中，针对这种模块导出，有多种方式可以导入，第一种方式是 const ... = require：
// 整体导入
const foo = require('foo');
// 单个导入
const bar = require('foo').bar;
*/
/* 
第二种方式是 import ... from，注意针对整体导出，需要使用 import * as 来导入：
// 整体导入
import * as foo from 'foo';
// 单个导入
import { bar } from 'foo';
*/
/* 
第三种方式是 import ... require，这也是 ts 官方推荐的方式：
// 整体导入
import foo = require('foo');
// 单个导入
import bar = foo.bar;
*/
// 对于这种使用 commonjs 规范的库，假如要为它写类型声明文件的话，就需要使用到 export = 这种语法了
// types/foo/index.d.ts
/* export = foo;
declare function foo(): string;
declare namespace foo {
    const bar: number;
} */
/* 
上例中使用了 export = 之后，就不能再单个导出 export { bar } 了。所以我们通过声明合并，使用 declare namespace foo 来将 bar 合并到 foo 里
 */

// UMD 库
// 既可以通过 <script> 标签引入，又可以通过 import 导入的库，称为 UMD 库
// 我们需要额外声明一个全局变量，为了实现这种方式，ts 提供了一个新语法 export as namespace
// UMD - export as namespace
// declare.d.ts - 如下代码
/* export as namespace foo;
export = foo;
declare function foo(): string;
declare namespace foo {
    const bar: number;
} */

// 直接扩展全局变量
/* jQuery.foo({
    bar: ''
}); */

// 在 npm 包或 UMD 库中扩展全局变量
/* 
对于一个 npm 包或者 UMD 库的声明文件，只有 export 导出的类型声明才能被导入。所以对于 npm 包或 UMD 库，如果导入此库之后会扩展全局变量，则需要使用另一种语法在声明文件中扩展全局变量的类型，那就是 declare global
*/

// 模块插件
// ts 提供了一个语法 declare module，它可以用来扩展原有模块的类型。
// declare module

// 声明文件中的依赖

// 三斜线指令
/* 
当我们在书写一个全局变量的声明文件时
当我们需要依赖一个全局变量的声明文件时
*/
// 拆分声明文件
// node_modules/@types/jquery/index.d.ts

/// <reference types="sizzle" />
/// <reference path="JQueryStatic.d.ts" />
/// <reference path="JQuery.d.ts" />
/// <reference path="misc.d.ts" />
/// <reference path="legacy.d.ts" />

// 自动生成声明文件
/* 
如果库的源码本身就是由 ts 写的，那么在使用 tsc 脚本将 ts 编译为 js 的时候，添加 declaration 选项，就可以同时也生成 .d.ts 声明文件了。
我们可以在命令行中添加 --declaration（简写 -d），或者在 tsconfig.json 中添加 declaration 选项。这里以 tsconfig.json 为例：
{
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "lib",
        "declaration": true,
    }
}
*/
// 除了 declaration 选项之外，还有几个选项也与自动生成声明文件有关，这里只简单列举出来，不做详细演示了：
/* 
declarationDir 设置生成 .d.ts 文件的目录
declarationMap 对每个 .d.ts 文件，都生成对应的 .d.ts.map（sourcemap）文件
emitDeclarationOnly 仅生成 .d.ts 文件，不生成 .js 文件
*/

// 发布声明文件
/* 
有两种方案：
1.将声明文件和源码放在一起
2.将声明文件发布到 @types 下
*/
// 1.将声明文件和源码放在一起
// 声明文件是通过 tsc 自动生成的，那么无需做任何其他配置；
// 如果是手动写的声明文件，那么需要满足以下条件之一，才能被正确的识别：
/* 
给 package.json 中的 types 或 typings 字段指定一个类型声明文件地址
在项目根目录下，编写一个 index.d.ts 文件
针对入口文件（package.json 中的 main 字段指定的入口文件），编写一个同名不同后缀的 .d.ts 文件
*/
// 2.将声明文件发布到 @types 下
/* 
普通的 npm 模块不同，@types 是统一由 DefinitelyTyped 管理的。要将声明文件发布到 @types 下，就需要给 DefinitelyTyped 创建一个 pull-request，其中包含了类型声明文件，测试代码，以及 tsconfig.json 等。
*/