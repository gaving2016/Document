# Git Commit 规范指南

Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。但是，一般来说，commit message 应该清晰明了，说明本次提交的目的。

## 1 Commit 作用

- 提供更多的历史信息，方便快速浏览。
- 可读性好，清晰，不必深入看代码即可了解当前commit的作用。
- 为 Code Reviewing做准备。
- 方便跟踪工程历史。

## 2 Commit 格式
每次提交，Commit message 都包括三个部分：`header`，`body` 和 `footer`。
``` shell
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

其中，`header` 是必需的，`body` 和 `footer` 可以省略。
不管是哪一个部分，任何一行都不得超过100个字符。这是为了避免自动换行影响美观。

## 3 Header
`Header`部分只有一行，包括三个字段：`type`（必需）、`scope`（可选）和`subject`（必需）。

### 3.1 type

用于说明 `commit` 的类别，只允许使用下面7个标识。

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

### 3.2 scope

`scope`用于说明 `commit` 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

如果你的修改影响了不止一个`scope`，你可以使用*代替。

### 3.3 subject

`subject`是 `commit` 目的的简短描述，不超过50个字符。

## 4 Body

`Body` 部分是对本次 `commit` 的详细描述，可以分成多行。下面是一个范例：
```shell
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

## 5 Footer

Footer 部分只用于以下两种情况：

### 5.1 不兼容变动
如果当前代码与上一个版本不兼容，则 `Footer` 部分以`BREAKING CHANGE`开头，后面是对变动的描述、以及变动理由和迁移方法。

### 5.2 关闭 Issue
如果当前 `commit` 针对某个`issue`，那么可以在 `Footer` 部分关闭这个 `issue` 。

## 6 Revert

还有一种特殊情况，如果当前 `commit` 用于撤销以前的 `commit`，则必须以`revert:`开头，后面跟着被撤销 `Commit` 的 `Header`。
```shell
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```
`Body`部分的格式是固定的，必须写成`This reverts commit <hash>`，其中的`hash`是被撤销 `commit` 的 `SHA` 标识符。