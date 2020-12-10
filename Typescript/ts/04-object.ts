/* 
对象的类型——接口
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
1.接口一般首字母大写。
2.我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
赋值的时候，变量的形状必须和接口的形状保持一致。
 */
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
// 1.定义的变量比接口少了一些属性是不允许的
/* let cat: Person = {
    name: 'Tom'
}; */
// Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

// 2.多一些属性也是不允许的
interface Person2 {
    name: string;
    age: number;
}

let tom2: Person2 = {
    name: 'Tom',
    age: 25,
    // gender: 'male'   // 未定义的属性：
};
// Error: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person2'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person2'

// 1.可选属性
// 1-1.有时我们希望不要完全匹配一个形状，那么可以用可选属性：
// 1-2.仍然不允许添加未定义的属性：
interface Person3 {
    name: string;
    age?: number;
}

let tom3: Person3 = {
    name: 'Tom'
};

let tom31: Person3 = {
    name: 'Tom',
    age: 25
};

let tom32: Person3 = {
    name: 'Tom',
    age: 25,
    // gender: 'male'   // 未定义的属性：
};

// 2.任意属性
// 2-1.需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 2-2.一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
interface Person4 {
    name: string;
    age?: number;
    [propName: string]: any;    // 使用 [propName: string] 定义了任意属性取 string 类型的值。
}
let tom4: Person4 = {
    name: 'Tom',
    gender: 'male'
};
// 任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
/* interface Person41 {
    name: string;
    age?: number;   // number 不是 string 的子属性
    [propName: string]: string;
} */
// Property 'age' of type 'number | undefined' is not assignable to string index type 'string'.
/* let tom41: Person41 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
}; */
/* Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person41'.
  Property 'age' is incompatible with index signature.
    Type 'number' is not assignable to type 'string'. */

// 联合类型
/* || 此处有报错 => 我暂时未理解 Property 'age' of type 'number | undefined' is not assignable to string index type 'string | number'. */
interface Person5 {
    name: string;
    // age?: number;
    [propName: string]: string | number;
}

let tom5: Person5 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
// 3.只读属性
// 3-1. 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
// 3-2. 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
interface Person6 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom6: Person6 = {
    id: 89757,
    name: 'Tom',
    age: 25,
    gender: 'male'
};
// tom6.id = 9527;
// Cannot assign to 'id' because it is a read-only property
interface Person7 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
// Error Property 'id' is missing in type '{ name: string; gender: string; }' but required in type 'Person7'
/* let tom7: Person7 = {
    name: 'Tom',
    gender: 'male'
}; */
// Error Cannot assign to 'id' because it is a read-only property.
// tom7.id = 89757;