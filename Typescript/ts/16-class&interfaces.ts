// 类与接口
// 类实现接口
/* 
实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现
 */
/* interface Alarm {
    alert(): void;
}
class Door {
}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
} */
// 一个类可以实现多个接口.
interface Alarm {
    alert(): void;
}
interface Light {
    lightOn(): void;
    lightOff(): void;
}
class CarCar implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}