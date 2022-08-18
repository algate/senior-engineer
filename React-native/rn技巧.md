### 1.给 `View` 添加阴影效果
`shadowOffset` 代表的是偏移量；
```html
<View
    style={{
        shadowColor: '#00DCCA',
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: .8,
        shadowRadius: 8,
    }}
>
</View>

```

### 2.rn中获取元素的宽高
```js
measureView(event) {
  console.log(event.nativeEvent.layout);
  runInAction(()=>this.height = event.nativeEvent.layout.height)
}
onLayout={(event) => this.measureView(event)
<LightCircle onLayout={(event) => this.measureView(event)}></LightCircle>
```

