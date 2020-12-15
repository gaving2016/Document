# 类型判断类

## isObject

检查给定参数是否为对象。

### 源码：
```js
/**
 * @description 判断Object
 * @param {any} value 
 * @returns {boolean} 
 */
const isObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]';
}
```

### 使用：
```js
let a = {name:"王叨叨"};
let b = 1;

isObject(a) // true
isObject(b) // false
```

## isArray

检查给定参数是否为数组。

### 源码：
```js
/**
 * @description 判断Array
 * @param {any} value 
 * @returns {boolean} 
 */
const isArray = (value) => {
  return value instanceof Array || Object.prototype.toString.call(value) === '[object Array]';
}
```

### 使用：
```js
let a = [1,2,3];
let b = 1;

isArray(a) // true
isArray(b) // false
```

## isDate

检查给定参数是否为数组。

### 源码：
```js
/**
 * @description 判断Date
 * @param {any} value 
 * @returns {boolean} 
 */
const isDate = (value) => {
  return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
```

### 使用：
```js
let a = new Date();
let b = "2020-12-15";

isDate(a) // true
isDate(b) // false
```

## isNumber

检查给定参数是否为数字。

### 源码：
```js
/**
 * @description 判断Number
 * @param {any} value 
 * @returns {boolean} 
 */
const isNumber = (value) => {
  return value instanceof Number || Object.prototype.toString.call(value) === '[object Number]';
}
```

### 使用：
```js
let a = 1;
let b = "2020-12-15";

isNumber(a) // true
isNumber(b) // false
```

## isString

检查给定参数是否为字符串。

### 源码：
```js
/**
 * @description 判断String
 * @param {any} value 
 * @returns {boolean} 
 */
const isString = (value) => {
  return value instanceof String || Object.prototype.toString.call(value) === '[object String]';
}
```

### 使用：
```js
let a = "王叨叨";
let b = 213;

isString(a) // true
isString(b) // false
```

## isBoolean

检查给定参数是否为布尔类型。

### 源码：
```js
/**
 * @description 判断Boolean
 * @param {any} value 
 * @returns {boolean} 
 */
const isBoolean = (value) => {
  return typeof value == 'boolean';
}
```

### 使用：
```js
isBoolean(false) // true
isBoolean(0) // false
```

## isFunction

检查给定参数是否为函数类型。

### 源码：
```js
/**
 * @description 判断Function
 * @param {any} value 
 * @returns {boolean} 
 */
const isFunction = (value) => {
  return typeof value == 'function';
}
```

### 使用：
```js
isFunction(function a(){}) // true
isFunction(0) // false
```

## isNull

检查给定参数是否为空类型。

### 源码：
```js
/**
 * @description 判断isNull
 * @param {any} value 
 * @returns {boolean} 
 */
const isNull = (value) => {
  return value === undefined || value === null;
}
```

### 使用：
```js
isNull(null) // true
isNull(undefined) // true
isNull(0) // false
```