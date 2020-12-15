# 事件处理类

## listener

事件监听器。

### 源码：
```js
/**
 * @description 事件监听器
 * @param {HTMLElement|window} el 监听的dom
 * @param {String} event 事件名称
 * @param {Function} callback 回调函数
 * @returns {Object} {{remove(): void}} 包含移除事件的对象
 */
const listener = (el, event, callback) => {
  if (el.addEventListener) {
    el.addEventListener(event, callback, false)
    return {
      remove() {
        el.removeEventListener(event, callback, false)
      }
    }
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, callback)
    return {
      remove() {
        el.detachEvent('on' + event, callback)
      }
    }
  }
}
```

## on

绑定事件。

### 源码：
```js
/**
 * @description 绑定事件
 * @param {*} element 页面元素
 * @param {*} event 事件名
 * @param {*} handler 处理函数
 */
export const on = (function () {
  if (document.addEventListener) {
    return function (element: any, event: string, handler: any) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element: any, event: string, handler: any) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()
```

## off

解绑事件。

### 源码：
```js
/**
 * @description 解绑事件
 * @param {*} element 页面元素
 * @param {*} event 事件名
 * @param {*} handler 处理函数
 */
export const off = (function () {
  if (document.removeEventListener) {
    return function (element: any, event: string, handler: any) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element: any, event: string, handler: any) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
```