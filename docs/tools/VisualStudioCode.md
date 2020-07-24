# Visual Studio Code

微软出品的 VScode 现在已经越来越完善。性能远超 Atom 和 WebStorm，相对于 Sublime Text 免费开源，自带 Markdown 文档高亮！

VS Code 强大之处还在于它的插件市场。这一点可以说是师承 Eclipse，不过 VS Code 吸取了 Eclipse 的教训，把插件系统运行在主进程之外，高度可定制但同时又是可控的，启动和运行速度非常快。VS Code 提供了 Windows、macOS 和 Linux 版本，内置支持JavaScript、TypeScript 和 Node.js，通过丰富的扩展和插件生态，你可以使用 VS Code 高效的编写 C++、C#、Java、Python、PHP、Go 等主流编程语言。可以说，VS Code 对几乎所有的编程语言、框架和开发技术都有支持，提供这种支持的方式是多样的，主要包括了为特定技术提供代码片段、语法高亮、Emmet以及智能提示功能。可以说这是一款轻量级的、高效的、高度可定制的编程利器。

Visual Studio Code下载地址：[https://code.visualstudio.com/](https://code.visualstudio.com/)

## 插件
* [Settings Sync][1]：多个设备同步插件。
* [Chinese (Simplified) Language Pack for Visual Studio Code][2]：适用于 VS Code 的中文（简体）语言包。
* [Sublime Text Keymap and Settings Importer][3]：导入Sublime Text快捷键。
* [Bookmarks][4]：类似于sublime text的书签标记。
* [Easy Sass][5]：自动编译SASS。
* [File Template][6]：常用文件模板，新建文件的时候用的，默认支持`JavaScript`、`HTML`、`CSS`、`PHP`、`Python`、`Ruby`、`XML`、`Vue`，如果需要修改，打开路径` ~/.vscode/extensions/RalfZhang.filetemplate-2.0.0/asset/templates/`，这里给出我自己弄的一份[模板][7]。
* [Vetur][8]：语法高亮、智能感知、Emmet等。
* [Path Intellisense][9]：自动路劲补全。
* [Markdown All in One][10]：所有需要的Markdown标记。
* [Markdown Preview Enhanced][11]：边写边预览，可以导出为PDF。
* [Prettier][12]：格式化代码。
* [SVN][13]：SVN版本管理。

## 常用快捷键

|按键|功能|
|----|:----|
|`Ctrl + Shift + P`，`F1`|显示命令面板| 
|`Ctrl + P`|查找当前项目中的文件和快速搜索；输入 @ 查找文件主标题/函数；或者输入 : 跳转到文件某行| 
|`Ctrl + R`|快速列出/跳转到某个函数| 
|`Ctrl + D`|选词 （反复按快捷键，即可继续向下同时选中下一个相同的文本进行同时编辑）| 
|`Ctrl + G`|跳转到相应的行| 
|`Ctrl + J`|合并行（已选择需要合并的多行时）| 
|`Ctrl + K + U`|改为大写| 
|`Ctrl + K + L`|改为小写| 
|`Ctrl + F`|查找| 
|`Ctrl + H`|替换| 
|`Shift + Alt + （拖动鼠标）`|列（框）选择| 
|`Ctrl + Shift + Alt +（箭头键）`|列（框）选择| 
|`Ctrl + \`|拆分编辑器| 
|`Ctrl +  1 / 2 / 3`|聚焦到第1，第2或第3编辑器组| 
|`Ctrl + ] / [`|缩进/缩进行| 
|`Ctrl + F4`，`Ctrl + W`|关闭编辑器| 
|`Ctrl + N`|新文件| 
|`Ctrl + O`|打开文件| 
|<code>Ctrl + `</code>|显示集成终端| 

## 常规配置

`文件-首选项-设置-settings.json`，不生效请安装对应插件。

```json
{
    // 调整窗口的缩放级别。原始大小是 0，每次递增(例如 1)或递减(例如 -1)表示放大或缩小 20%。也可以输入小数以便以更精细的粒度调整缩放级别。
    "window.zoomLevel": 0,
    // 指定工作台中使用的颜色主题。
    "workbench.colorTheme": "Monokai",
    // 窗口失去焦点自动保存
    "files.autoSave": "off",
    // 如果设置为 "true"，将不再显示扩展建议的通知。
    "extensions.ignoreRecommendations": true,
    // 如果设置成 true，关于新的版本消息将不再显示
    // 控制是否将打开的编辑器显示为预览。
    "workbench.editor.enablePreview": false,
    //代码缩进风格4个字符
    "editor.tabSize": 4,
    "editor.fontSize": 18,
    // 控制编辑器是否应在键入后自动设置行的格式
    "editor.formatOnType": false,
    // 保存时取消自动格式化
    "editor.formatOnSave": false,
    // 编辑粘贴取消自动格式化
    "editor.formatOnPaste": false,
    // 控制编辑器中呈现空白字符的方式为“边界”，不会在单词之间呈现单空格。
    "editor.renderWhitespace": "boundary",
    // 控制光标动画样式
    "editor.cursorBlinking": "smooth",
    // 控制是否将代码段与其他建议一起显示以及它们的排序方式。
    "editor.snippetSuggestions": "top",
    // 配置语言的文件关联
    "files.associations": {
        "*.vue": "vue"
    },
    //打开或关闭自动保存
    "eslint.autoFixOnSave": false,
    "eslint.options": {
        "extensions": [
            ".js",
            ".vue"
        ]
    },
    //设置Eslint需要验证的语言
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //配置 glob 模式以在搜索中排除文件和文件夹。
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/dist": true
    },
    // 为指定的语法定义配置文件或使用带有特定规则的配置文件。
    "emmet.syntaxProfiles": {
        "javascript": "jsx",
        "vue": "html",
        "vue-html": "html"
    },
    //默认格式化js插件
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    //默认格式化html插件
    "vetur.format.defaultFormatter.html": "prettyhtml",
    //vetur格式化时初始化script缩进
    "vetur.format.scriptInitialIndent": true,
    //vetur格式化时初始化style缩进
    "vetur.format.styleInitialIndent": true,
    //vetur格式化时初始化style缩进
    "vetur.format.options.tabSize": 4,
    //vetur格式化时初始化html配置
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            //设置html属性是否换行
            "wrap_attributes": "auto"
        },
        // "prettyhtml": {
        //     "printWidth": 120,
        //     "singleQuote": false,
        //     "wrapAttributes": false,
        //     "sortAttributes": false
        // }
    },
    //每列显示内容长多，超出时控制编辑器列的换行。
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 130,
    "editor.suggestSelection": "first",
    "workbench.startupEditor": "newUntitledFile",
    "vsicons.dontShowNewVersionMessage": true,
}
```

## 全局代码片段
顾名思义，任意位置都可以调用！

```json
{
    "Background": {
        "prefix": "bg+",
        "body": [
            "background:${1:transparent} url(${2}) ${3:0} ${4:0} ${5:no-repeat;}"
        ],
        "description": "新建background"
    },
    "Console": {
        "prefix": "con",
        "body": [
            "console.log(\"$1\")"
        ],
        "description": "输出Console"
    },
    "Vue": {
        "prefix": "vue+",
        "body": [
            "<template>",
            "<div>$5</div>",
            "</template>",
            "",
            "<script>",
            "//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）",
            "//例如：import 组件名称 from '组件路径';",
            "export default {",
            "//引入组件",
            "props: [",
            "",
            "],",
            "//引入混淆",
            "mixins: [",
            "",
            "],",
            "//import引入的组件需要注入到对象中才能使用",
            "components: {",
            "",
            "},",
            "data() {",
            "//这里存放数据",
            "return {",
            "",
            "};",
            "},",
            "//监听属性 类似于data概念",
            "computed: {",
            "",
            "},",
            "//监控data中的数据变化",
            "watch: {",
            "",
            "},",
            "//方法集合",
            "methods: {",
            "",
            "},",
            "//生命周期 - 创建完成（可以访问当前this实例）",
            "created() {",
            "",
            "},",
            "//生命周期 - 挂载完成（可以访问DOM元素）",
            "mounted() {",
            "",
            "},",
            "//生命周期 - 创建之前",
            "beforeCreate() {",
            "",
            "},",
            "//生命周期 - 挂载之前",
            "beforeMount() {",
            "",
            "},",
            "//生命周期 - 更新之前",
            "beforeUpdate() {",
            "",
            "},",
            "//生命周期 - 更新之后",
            "updated() {",
            "",
            "},",
            "//生命周期 - 销毁之前",
            "beforeDestroy() {",
            "",
            "},",
            "//生命周期 - 销毁完成",
            "destroyed() {",
            "",
            "},",
            "//如果页面有keep-alive缓存功能，这个函数会触发",
            "activated() {",
            "",
            "},",
            "}",
            "</script>",
            "",
            "<style lang='scss'>",
            "//@import '$3';",
            "</style>"
        ],
        "description": "新建Vue模板"
    },
    "Table": {
        "prefix": "table+",
        "body": [
            "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\">",
            " <caption></caption>",
            " <thead>",
            "  <tr>",
            "   <th></th>",
            "  </tr>",
            " </thead>",
            " <tbody>",
            "  <tr>",
            "   <td></td>",
            "  </tr>",
            " </tbody>",
            " <tfoot>",
            "  <tr>",
            "   <td></td>",
            "  </tr>",
            " </tfoot>",
            "</table>"
        ],
        "description": "新建table"
    },
    "Dl": {
        "prefix": "dl+",
        "body": [
            "<dl>",
            " <dd></dd>",
            " <dt></dt>",
            "</dl>"
        ],
        "description": "新建dl"
    },
    "link": {
        "prefix": "a+",
        "body": [
            "<a href=\"javascript:void(0)\">$1</a>"
        ],
        "description": "新建a链接"
    },
}
```


  [1]: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
  [2]: https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans
  [3]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings
  [4]: https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks
  [5]: https://marketplace.visualstudio.com/items?itemName=spook.easysass
  [6]: https://marketplace.visualstudio.com/items?itemName=RalfZhang.filetemplate
  [7]: http://typecho.wangdaodao.com/2018/06/2009305111.zip
  [8]: https://marketplace.visualstudio.com/items?itemName=octref.vetur
  [9]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
  [10]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
  [11]: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced
  [12]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
  [13]: https://marketplace.visualstudio.com/items?itemName=johnstoncode.svn-scm