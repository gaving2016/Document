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
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
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
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
```

### 使用：
```js
window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
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

## hexToRGB

16进制转RGB，支持透明度。

### 源码：
```js
/**
 * @description 16进制转RGB，支持透明度
 * @param hex 传入16进制颜色
 * @returns {string}
 */
export const hexToRGB = (hex) => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};
```

### 使用：
```js
hexToRGB("#27ae60ff") // "rgba(39, 174, 96, 255)"
hexToRGB("#27ae60") // "rgb(39, 174, 96)"
hexToRGB("27ae60") // "rgb(39, 174, 96)"
hexToRGB("#fff") // "rgb(255, 255, 255)"
```

## rgbToHex

RGB转16进制。

### 源码：
```js
/**
 * @description RGB转16进制
 * @param {number} r 传入rgb颜色
 * @param {number} g 传入rgb颜色
 * @param {number} b 传入rgb颜色
 * @returns {string}
 */
export const rgbToHex: RGBToHex = (r, g, b) => {
  return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
};
```

### 使用：
```js
rgbToHex(255, 165, 1) // '#ffa501'
rgbToHex(39, 174, 96) // '#27ae60'
rgbToHex(0, 0, 0) // '#000000'
```