// export
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

// 混用declare 和 export
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

// UMD - export as namespace
export as namespace foo;
export = foo;       // 或者 export default foo;
declare function foo(): string;
declare namespace foo {
    const bar: number;
}

// 直接扩展全局变量 
declare namespace JQuery {
    interface CustomOptions {
        bar: string;
    }
}
interface JQueryStatic {
    foo(options: JQuery.CustomOptions): string;
}

// declare global
declare global {
    interface String {
        prependHello(): string;
    }
}
export {};

// declare module
/* import * as moment from 'moment';
declare module 'moment' {
    export function foo(): moment.CalendarKey;
} */
// declare module 也可用于在一个文件中一次性声明多个模块的类型
declare module 'foo' {
    export interface Foo {
        foo: string;
    }
}
declare module 'bar' {
    export function bar(): string;
}

