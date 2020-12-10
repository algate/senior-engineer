// 内置对象
/* 
ECMAScript 标准提供的内置对象有：
Boolean、Error、Date、RegExp 等。
*/
// 在 TypeScript 中将变量定义为这些类型：
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
/* 
DOM 和 BOM 提供的内置对象有：
Document、HTMLElement、Event、NodeList 等。
*/
// TypeScript 中会经常用到这些类型：
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});

// TypeScript 核心库的定义文件 https://github.com/Microsoft/TypeScript/tree/master/src/lib
// TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
interface Math {
    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
    pow(x: number, y: number): number;
}
interface Document extends Node, GlobalEventHandlers, DocumentEvent {
    addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}

// 用 TypeScript 写 Node.js
/* 
Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：
npm install @types/node --save-dev
*/