#npm
* 一、如何检测镜像是否设置成功呢？即查看镜像的配置结果

`npm config get registry` 

* 二、使用淘宝镜像安装依赖 （https://npm.taobao.org/）

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

* 三、把npm的register给永久设置过来就好了，这样使用cnpm或者npm就没差别了。（可选可不选）

`npm config set registry https://registry.npm.taobao.org--` 
配置后可通过下面方式来验证是否成功

`npm config get registry`



# node

node版本管理工具

`https://github.com/coreybutler/nvm-windows/releases `

查看当前已经安装的nodejs版本：

`nvm list`

查看可以安装的nodejs版本：

`nvm list available`

安装指定版本的node：

`nvm install **** 64-bit`

使用指定版本的node：

`nvm use ****`

删除指定版本的node：

`nvm uninstall 7.10.0`
