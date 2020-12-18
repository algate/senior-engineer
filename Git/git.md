# Git使用手册
## 基础命令
```Bash
git add . 
git commit 回车，c快捷键输入信息，esc退出，输入“:wq”
git push
```
## 配置用户信息
```Bash
git config -l  /  --list
git config --global uesr.name/user.email (全局配置)
git config user.name/user.email (本地项目)
```
### 分支问题：
1. 本地没有分支,拉取远端分支
```bash
git checkout -b 本地分支名 origin/远程分支名
```

2. 本地创建分支，上传到远端
```bash
git checkout -b 分支名
git push --set-upstream origin 分支名
```
3. 题外话：如果想clone别人项目分支的代码
```
git clone -b 分支名 git git@github.com项目地址 
```
### Git 修改commit的用户信息
```bash
git commit --amend --author="weixiaojian <weixiaojian@163.com>"
```
### 可以查看所有的历史操作记录 git bash here
```bash
git reflog/git log -g 
```
### 查看远端git地址：
```bash
git remote -v
````

### 更改远端git地址：
```bash
git remote set-url origin 新地址http://weixiaojian@192.168.52.29:10010/r/SI_SMCP_admin.git
```
### 版本库提交忽略某个文件：
```bash
git update-index --assume-unchanged [file-path]
```
> 如果需要恢复提交，使用：
```bash
git update-index --no-assume-unchanged [file-path]
```
> 命令中的file-path 就是需要忽略提交的文件的路径，只对文件有效。

### add .之后恢复到未添加文件之前
```bash
git rm --cache [file] (文件本地保持修改状态，不删除文件)
```
```bash
git rm -f 文件 （会物理删除，渣渣都不剩）
```

### 分支1的修改同步到分支2
```bash
git checkout 分支2    
git merge 分支1
```
### 回退版本库
```bash
git revert --hard HEAD/版本号
git reset  是吧
```