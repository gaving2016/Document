# 数字类

## toFixed

浮点数保留格式。

::: warning
请注意返回值为字符串类型！
:::

### 源码：
```js
/**
 * @description 浮点数保留格式
 * @param {number} num - 要格式化的数字
 * @param {number} len - 保留位数，大于等于0
 * @param {string} type - 保留格式，可选'ceil' 'floor' 'round',对小数进行格式保留
 * @returns {string}  返回格式化后的数字
 */
const toFixed = (num, len, type = '') => {
  if ((typeof num !== 'number') || len < 0) {
    return num.toString()
  }
  const numList = num.toString().split('.')
  const decimal = numList[1]
  const _len = decimal ? decimal.length : 0
  if (_len <= len) {
    return num.toFixed(len)
  } else {
    let res, nextBit
    const initNum = Number(numList[0] + '' + decimal.substr(0, len) + '.' + decimal.substr(len))
    switch (type) {
      case 'ceil':
        res = Math.ceil(initNum) / Math.pow(10, len)
        break
      case 'floor':
        res = Math.floor(initNum) / Math.pow(10, len)
        break
      case 'round':
        nextBit = decimal[len]
        if (+nextBit >= 5) {
          res = Math.ceil(initNum) / Math.pow(10, len)
        } else {
          res = Math.floor(initNum) / Math.pow(10, len)
        }
        break
      default:
        res = num
    }
    return res.toString()
  }
};
```

### 使用：
```js
toFixed(123.23, 3) // "123.230"
toFixed(123.234, 2, "ceil") // "123.24"
toFixed(123.234, 2, "floor") // "123.23"
toFixed(123.234, 2, "round") // "123.23"
toFixed(123.235, 2, "round") // "123.24"
```

## randomIntegerInRange

返回指定范围内的随机整数。

### 源码：
```js
/**
 * @description 返回指定范围内的随机整数
 * @param {number} min
 * @param {number} max
 * @returns {number}  返回整数
 */
const randomIntegerInRange = (min, max) => {
  return Math.floor(Math.random() * (Math.abs(max - min) + 1)) + min;
};
```

### 使用：
```js
randomIntegerInRange(1, 100) // 9
```

## randomNumberInRange

返回指定范围内的随机数。

### 源码：
```js
/**
 * @description 返回指定范围内的随机数
 * @param {number} min
 * @param {number} max
 * @returns {number}  返回随机数
 */
const randomNumberInRange = (min, max) => {
  return Math.random() * Math.abs(max - min) + min;
};
```

### 使用：
```js
randomNumberInRange(1, 100) // 9.11
```