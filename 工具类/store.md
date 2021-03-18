**dispatch：**含有异步操作，数据提交至 actions ，可用于向后台提交数据
```
this.$store.dispatch('isLogin', true);
```
**commit：**同步操作，数据提交至 mutations ，可用于读取用户信息写到缓存里
```
this.$store.commit('loginStatus', 1);
```