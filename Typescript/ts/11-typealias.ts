// 类型别名
// 类型别名用来给一个类型起个新名字。
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getNameTypealias(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}