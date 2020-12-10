// 类的概念
/* 
类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
对象（Object）：类的实例，通过 new 生成
面向对象（OOP）的三大特性：封装、继承、多态
封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
存取器（getter & setter）：用以改变属性的读取和赋值行为
修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
*/
// ES6 中类的用法
/* 
使用 class 定义类，使用 constructor 定义构造函数。
通过 new 生成新实例的时候，会自动调用构造函数。
*/
/* class Animal {
    public name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let aa = new Animal('Jack');
console.log(aa.sayHi()); // My name is Jack */

// 类的继承
// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
/* class Cat extends Animal {
    constructor(name) {
      super(name); // 调用父类的 constructor(name)
      console.log(this.name);
    }
    sayHi() {
      return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}
let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom */

// 存取器
// 使用 getter 和 setter 可以改变属性的赋值和读取行为：
/* class Animal {
    constructor(name) {
      this.name = name;
    }
    get name() {
      return 'Jack';
    }
    set name(value) {
      console.log('setter: ' + value);
    }
  }
  
  let a = new Animal('Kitty'); // setter: Kitty
  a.name = 'Tom'; // setter: Tom
  console.log(a.name); // Jack */

// 静态方法
// 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：
/* class Animal {
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

let a = new Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function */

// ES7 中类的用法
// ES6 中实例的属性只能通过构造函数中的 this.xxx 来定义，ES7 提案中可以直接在类里面定义：
// 实例属性
/* class Animal {
    name = 'Jack';
    constructor() {
        // ...
    }
}
let a = new Animal();
console.log(a.name); // Jack */
// 静态属性
// ES7 提案中，可以使用 static 定义一个静态属性：
/* class Animal {
    static num = 42;
    constructor() {
        // ...
    }
}
console.log(Animal.num); // 42 */

// TypeScript 中类的用法
// ypeScript 可以使用三种访问修饰符（Access Modifiers）public private 和 protected
/* 
public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */
class Animal {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
}
let aaa = new Animal('Jack');
console.log(aaa.name); // Jack
aaa.name = 'Tom';
console.log(aaa.name); // Tom