# PS破解

## 1.开启任何来源功能
sudo spctl --master-disable
## 2.移除下载镜像的quarantine属性
sudo xattr -r -d com.apple.quarantine 文件拖进终端
## 3.断网安装
    双击安装包；「打开展示出 install ； packages； products...」
    右键点击 intall ；「展开：show package contents」
    逐级文件夹进入： Contents->MacOS->install
   双击点击 install ，执行安装成功啦。