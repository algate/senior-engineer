#### 1. 使用require.context实现前端工程自动化
##### require.context是什么
通过执行require.context函数获取一个特定的上下文,主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块。

>简单说就是：
这里可以使用require.context函数遍历modules文件夹的所有文件一次性导入到index.js中

**require.context函数接受三个参数**

1. directory {String} -读取文件的路径

2. useSubdirectories {Boolean} -是否遍历文件的子目录

3. regExp {RegExp} -匹配文件的正则

语法: require.context(directory, useSubdirectories = false, regExp = /^.//);

**<font color="red">值得注意的是:</font>require.context函数执行后返回的是一个函数,并且这个函数有3个属性**

1. resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径

2. keys {Function} -返回匹配成功模块的名字组成的数组

3. id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?

这三个都是作为函数的属性(注意是作为函数的属性,函数也是对象,有对应的属性)
