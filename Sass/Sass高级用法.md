# Sass @for 指令

## through

@for 使用关键字通过指定包括`<start>`和`<end>`的值的范围。`[start, end]`

```css
@for $var from <start> through <end> ;
```

## to

@for 用于关键字指定从`<start>`值到`<end>`值之前的值的范围。`[start, end)`

```css
@for $var from <start> to <end> ;
```

`$var`: 它表示变量的名称，如$ i。
`<start>` 和 `<end>`: 这些是 SassScript 表达式，将返回整数。如果`<start>`大于`<end>`，则计数器变量递减，当`<start>`小于`<end>`时，计数器变量递增。

# Sass @each 指令

## Sass @each 多个分配

`@each $var1, $var2, $var3 ... in <list>`
`$var1`, `$var2` 和 `$var3`: 这些表示变量的名称。
`<list>`: 它表示列表的列表，每个变量将保存子列表的元素。

```css
@each $color, $border in (aqua, dotted), (red, solid), (green, double) {
    .#{$color} {
        background-color: $color;
        border: $border;
    }
}
```

🌰 例子：

```css
// 定义 flex 等分
@for $i from 0 through 12 {
    .u-flex-#{$i} {
        flex: $i;
    }
}
```

```css
// 定义字体(px)单位，小于 20 都为 px 单位字体
@for $i from 9 to 20 {
    .u-font-#{$i} {
        font-size: $i + px;
    }
}
```

## Sass @each 多个分配与映射

`@each $var1, $var2 in <map>`
`$var1`, `$var2`: 这些表示变量的名称。
`<map>`: 它表示对的列表。

```css
@each $header, $color in (h1: red, h2: green, h3: blue) {
    #{$header} {
        color: $color;
    }
}
```

🌰 例子：

```css
// 定义内外边距，历遍 1-80
@for $i from 0 through 80 {
    // 只要双数和能被5除尽的数
    @if $i % 2 == 0 or $i % 5 == 0 {
        // 得出：u-margin-30或者u-m-30
        .u-margin-#{$i},
        .u-m-#{$i} {
            margin: $i + px !important;
        }

        // 得出：u-padding-30或者u-p-30
        .u-padding-#{$i},
        .u-p-#{$i} {
            padding: $i + px !important;
        }

        @each $short, $long in l left, t top, r right, b bottom {
            // 缩写版，结果如： u-m-l-30
            // 定义外边距
            .u-m-#{$short}-#{$i} {
                margin-#{$long}: $i + px !important;
            }

            // 定义内边距
            .u-p-#{$short}-#{$i} {
                padding-#{$long}: $i + px !important;
            }

            // 完整版，结果如：u-margin-left-30
            // 定义外边距
            .u-margin-#{$long}-#{$i} {
                margin-#{$long}: $i + px !important;
            }

            // 定义内边距
            .u-padding-#{$long}-#{$i} {
                padding-#{$long}: $i + px !important;
            }
        }
    }
}
```

# sass 运算符

## 数字运算符

它允许诸如加法，减法，乘法和除法的数学运算

```css
$size: 25px;
h2 {
    font-size: $size + 5;
}
```

## 颜色运算符

它允许使用颜色分量和算术运算。

```css
$color1: #333399;
$color2: #cc3399;
p {
    color: $color1 + $color2;
}
```

## 字符串运算符

它使用+运算符来连接字符串。

```css
p {
    font-size: 5px + 10px;
}
```

## 布尔运算符

您可以使用 and、or 和 not（与或非）运算符对 Sass 脚本执行布尔运算。

```css
$age: 20;
.bool {
    @if ($age > 10 and $age < 25) {
        color: green;
    }
}
```

## 列表运算符

列表表示使用逗号或空格分隔的一系列值。有关列表的信息，请参见数据类型部分下的列表部分。
