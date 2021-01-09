# node-sass
全局安装 node-sass
```bash
npm install -g node-sass
```
自动监听编译 scss 文件 （--watch/-w    --output/-o    -r/--recursive:递归查看目录和文件  ）
## 不压缩
```bash
node-sass -w src/css/input.scss static/css/output.css
```
## 压缩
```bash
node-sass -w src/css/input.scss static/css/output.css --output-style compressed
# nested：嵌套缩进的css代码，它是默认值
# expanded：没有缩进的、扩展的css代码
# compact：简洁格式的css代码
# compressed：压缩后的css代码
```
## 监听文件夹下所有文件
```bash
node-sass  -w -r 源文件夹 -o 目标文件夹
```
# typescript
## 1. 全局安装 typescript
```bash
npm install -g typescript
```
## 2. init
```bash
tsc --init
```
生成tsconfig.js文件：
```json
"outDir": "./output/",        
// 文件生成js的文件路径/* Redirect output structure to the directory. */
"rootDir": "./ts/",       
// 存放ts文件的路径/* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
```
* 编译单个文件
在命令行上，运行TypeScript编译器：
```bash
tsc  greeter.ts
```
## 3. 监视ts文件的变化
每当你发生改变是自动编译：
```bash
tsc -w
```
## 4. 有关tsconfig.js的修改：
1. 自动生成声明文件（*.d.ts）：
```ts
{
    "compilerOptions": {
        "declaration": true,
    }
}
// declarationDir 设置生成 .d.ts 文件的目录
// declarationMap 对每个 .d.ts 文件，都生成对应的 .d.ts.map（sourcemap）文件
// emitDeclarationOnly 仅生成 .d.ts 文件，不生成 .js 文件
```
# serve
```bash
# 全局安装 serve
npm install -g serve
```
在计算机任何地方执行 `serve` 即可启动一个简易服务端
