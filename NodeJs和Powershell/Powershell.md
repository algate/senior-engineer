# PS工具常用命令集合：

## 1. 在当前文件夹下打开PS：
按住Shift 右击鼠标
选择在此处打开Powershell窗口

## 2. PS中打开当前文件夹
有时候，开着PS可是呢，要打开当前资源管理器，对文件进行处理，目录太深，如何快捷打开当前文件夹
有了PS当然是通过命令来处理了：
```bash
start .
# 这是最简单的，当然还有别的方法：
# explorer(gl) 如果不输入(gl)则是打开计算机(Win+E)
# ……别的不写了，太复杂了，有一个就够用了
```

## 3. PS中新建文件/文件夹
```bash
# 新建文件
New-Item file (只能新建文件)
```
```bash
# 新建文件夹
md/mkdir filefolder （只能新建文件夹）
```
```bash
# 新建文件/文件夹
New-Item filefolder -type File/Directory
```

## 4. PS中删除文件和文件夹
```bash
Remove-Item file/filefolder
```
```bash
ri/rd/rm/rmdir/erase file/filefolder
```
## 5. 打开cmd
```bash
start cmd
```
## 6. 资源管理器打开文件夹
```bash
start folder
```
## 7. PS查看文件内容
```bash
get-content file （后缀也得加上）
```
## 8. PS清空命令行
```bash
cls
```
## 9. PS目录查找
```bash
cd.. (返回上级菜单)
cd filefloder (访问目录问价夹)
```
## 10. ps1脚本执行一闪而过
`restricted` 的情况下！修改PS策略。
```bash
# 获取策略：get-executionpolicy 如果是restricted(被限制)
set-executionpolicy remotesigned
```
## 11. powershell脚本
```bash
powershell 脚本后缀为.ps1
```

## 12. 列出文件
```bash
dir/ls
```

## 13. 获取目录结构
```bash
tree
```
:::tip 要将目录结构输出到txt文件
tree >tree.txt
:::

# 实际应用
```bash
# rd base -Recurse
rd D:\GitCode\output\base.zip
# 直达文件夹目录
D: 
cd D:\GitCode\SI_SMCP_admin_new
# 信息平台 打包命令
gulp pre
# 复制文件夹
xcopy D:\GitCode\SI_SMCP_admin_new\admin-smcp D:\GitCode\SI_SMCP_admin_new\base\/s/f/h

# 7z压缩当前文件夹
# 7z a -r base.zip base/ -xr!node_modules
# 7z压缩output到其他位置
7z a -r D:\GitCode\output\base.zip base/ -xr!node_modules

rd base -Recurse
```
cmd下和powershell下执行，命令有所区别！
>说明：
>- rd删除文件夹及子项：
    ```bash
    rd base -Recurse
    ```
>- 复制文件夹
    ```bash
    xcopy D:\GitCode\SI_SMCP_admin_new\admin-smcp D:\GitCode\SI_SMCP_admin_new\base /s/f/h
    ```
    **/s** 复制目录和子目录，除非它们是空的。如果省略/s，则xcopy在单个目录中工作
    **/f** 在复制时显示源和目标文件夹
    **/h** 复制具有隐藏和系统文件属性的文件。默认情况下，xcopy不会复制隐藏文件或系统文件
>- 打包排除filename文件夹
    **a** 文件夹包括子项
    **-r** 递归子目录
    **-xr!filename** 排除文件夹