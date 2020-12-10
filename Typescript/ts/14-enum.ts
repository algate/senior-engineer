// 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 手动赋值
enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days2["Sun"] === 7); // true
console.log(Days2["Mon"] === 1); // true
console.log(Days2["Tue"] === 2); // true
console.log(Days2["Sat"] === 6); // true

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
enum Days3 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

console.log(Days3["Sun"] === 7); // true
console.log(Days3["Mon"] === 1.5); // true
console.log(Days3["Tue"] === 2.5); // true
console.log(Days3["Sat"] === 6.5); // true
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1

// 常数项和计算所得项
// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
// 前面我们所举的例子都是常数项，一个典型的计算所得项的例子：
// enum Color {Red, Green, Blue = "blue".length};
// enum Color {Red = "red".length, Green, Blue};

// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 外部枚举
declare enum Directions2 {
    Up,
    Down,
    Left,
    Right
}
let directions2 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];