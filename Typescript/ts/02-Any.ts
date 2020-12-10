// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// 但如果是 any 类型，则允许被赋值为任意类型。
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;