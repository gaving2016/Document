# 工具类

## clone

浅拷贝。

### 源码：
```js
/**
 * @description 浅拷贝
 * @param obj 需拷贝到对象
 * @returns obj
 */
const clone = (obj) => {
  if (isObj(obj)) {
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  } else {
    return obj;
  }
};
```

### 使用：
```js
const obj = { a: 1, b: "", c: { d: "asdf" } };

const newObj = clone(obj); // { a: 1, b: "", c: { d: "asdf" } }
```

## cloneDeep

深拷贝。

### 源码：
```js
/**
 * @description 深拷贝
 * @param obj 需拷贝到对象
 * @returns obj
 */
const cloneDeep = (obj, map = new WeakMap()) => {
  if (isObj(obj)) {
    const newObj = obj instanceof Array ? [] : {};
    if (map.get(obj)) {
      return obj;
    }
    map.set(obj, true);
    for (const key in obj) {
      newObj[key] = cloneDeep(obj[key], map);
    }
    return newObj;
  } else {
    return obj;
  }
};
```

### 使用：
```js
const obj = { a: 1, b: "", c: { d: "asdf" } };

const newObj = cloneDeep(obj); // { a: 1, b: "", c: { d: "asdf" } }
```

## debounce

防抖函数。

### 源码：
```js
/**
 * @description 防抖函数
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 * @param immediate 为true代表立即执行
 */
const debounce = (fn, wait, immediate) => {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    // 立即执行
    if (immediate) {
      // 第一次timer为null，则可以执行，一定时间内timer始终不为null
      const dos = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (dos) {
        fn.apply(context, args);
      }
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };
};
```

### 使用：
```js
let num = 0;
const test = () => {
  num += 1;
};
debounce(test, 1000)
```

## throttle

节流函数。

### 源码：
```js
/**
 * @description 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 */
const throttle = (fn, wait) => {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      // fn.apply(context, args);
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
};
```

### 使用：
```js
let num = 0;
const test = () => {
  num += 1;
};
throttle(test, 1000);
```

## randomId

生成唯一id。

### 源码：
```js
/**
 * @description 生成唯一id
 * @returns {string}
 */
const randomId = () => {
  return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
};
```

### 使用：
```js
randomId() // "206u687uesi"
```

## uuid

生成uuid。

### 源码：
```js
/**
 * @description 生成uuid
 * @returns {string}
 */
const uuid = () => {
  const s4 = ()=>{
    return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
```

### 使用：
```js
uuid() // "74309bd0-3171-eb2f-b7e6-2c1ea543b80f"
```