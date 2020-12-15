# DOM类操作

## hasClass

判断元素是否包含类名。

### 源码：
```js
/**
 * @description 判断元素是否包含类名
 * @param {string} target Dom元素
 * @param {string} className 要查找的类名
 * @return {boolean} 返回true或false
 */
const hasClass = (target, className) => {
  className = className || '';
  if (className.replace(/\s/g, '').length == 0) return false;
  return new RegExp(' ' + className + ' ').test(' ' + target.className + ' ');
}
```

### 使用：
```js
hasClass(document.getElementById('app'),'black')
```

## addClass

添加class类名。

### 源码：
```js
/**
 * @description 添加class类名
 * @param {string} target Dom元素
 * @param {string} className 要添加的类名
 * @returns {*} none
 */
const addClass = (target, className) => {
  if (!hasClass(target, className)) { target.className += " " + className };
}
```

### 使用：
```js
addClass(document.getElementById('app'),'black')
```

## removeClass

移除class类名。

### 源码：
```js
/**
 * @description 移除class类名
 * @param {string} target Dom元素
 * @param {string} className 要移除的类名
 * @returns {*} none
 */
const removeClass = (target, className) => {
  if (hasClass(target, className)) {
    let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    target.className = target.className.replace(reg, ' ');
  }
}
```

### 使用：
```js
removeClass(document.getElementById('app'),'black')
```

## toggleClass

切换class类名。

### 源码：
```js
/**
 * @description 切换class类名
 * @param {string} target Dom元素
 * @param {string} className 要移除的类名
 * @returns {*} none
 */
const toggleClass = (target, className) => {
  if (hasClass(target, className)) {
    removeClass(target, className);
  } else {
    addClass(target, className);
  }
}
```

### 使用：
```js
toggleClass(document.getElementById('app'),'black')
```