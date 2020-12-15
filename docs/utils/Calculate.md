# 浮点计算类

::: danger 关于大数计算
浮点计算存在精度误差，如果有大数计算并且对精度要求高，请使用第三方库：[bignumber.js][1]，[decimal.js][2]，[big.js][3]，[math.js][4]等，这里仅支持简单的浮点计算。
:::

## numToString

通用函数，数字转字符串，金额及后续浮点精度计算使用。

源码：
```js
/**
 * @description 数字转字符串
 * @param {number} num 被获取的值
 * @returns {string} 字符串
 * 用.toExponential()将数字转化为科学记数法表示
 * 匹配正则表达式 /\d(?: \.(\d *))?e([+-]\d +) /
 * 获取科学记数法中小数点后的字符及幂指数（e 后面的值），这样可以确定数字是几位小数。
 * 再用toFixed() 转换成数值表示
*/
function numToString(num) {
  if (typeof num !== 'number') {
    throw new Error('参数类型错误');
  };
  let m: any = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
  return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
}
```

## addExact

两个数相加。

### 源码：
```js
/**
 * @description 两个数相加
 * @param {number} arg1 - 相加的第一个数
 * @param {number} arg2 - 相加的第二个数
 * @returns {number} 返回总和
 */
const addExact = (arg1, arg2) => {
  const r1 = numToString(arg1).split('.')[1] ? numToString(arg1).split('.')[1].length : 0;
  const r2 = numToString(arg2).split('.')[1] ? numToString(arg2).split('.')[1].length : 0;
  const m = Math.pow(10, Math.max(r1, r2));
  const n = (r1 >= r2) ? r1 : r2;
  return Number((Math.round(arg1 * m + arg2 * m) / m).toFixed(n));
};
```

### 使用：
```js
addExact(0.1, 0.2) //0.3
addExact(0.1, 0.7) //0.8
addExact(17.9, 0.00001) //17.90001
addExact(1.1, 1.002) //2.102
addExact(10, 20) //30
addExact(268.34, 0.83) //269.17
addExact(0.0000000000100001, 0.0000002) //0.0000002000100001
addExact(0.0000001, 0.0000000000002) //0.0000001000002
```

## subExact

两个数相减。

### 源码：
```js
/**
 * @description 两个数相减
 * @param {number} arg1 - 相减的第一个数
 * @param {number} arg2 - 相减的第二个数
 * @returns {number} 返回总和
 */
const subExact = (arg1, arg2) => {
  const r1 = numToString(arg1).split('.')[1] ? numToString(arg1).split('.')[1].length : 0;
  const r2 = numToString(arg2).split('.')[1] ? numToString(arg2).split('.')[1].length : 0;
  const m = Math.pow(10, Math.max(r1, r2));
  const n = (r1 >= r2) ? r1 : r2;
  return Number((Math.round(arg1 * m - arg2 * m) / m).toFixed(n));
};
```

### 使用：
```js
subExact(1.5, 1.2) // 0.3
subExact(4, 2) // 2
subExact(1.5, 1.21) // 0.29
subExact(1, 0.8) // 0.2
```

## mulExact

两个数相乘。

### 源码：
```js
/**
 * @description 两个数相乘
 * @param {number} arg1 - 相乘的第一个数
 * @param {number} arg2 - 相乘的第二个数
 * @returns {number} 返回乘积
 */
const mulExact = (arg1, arg2) => {
  const r1 = numToString(arg1).split('.')[1] ? numToString(arg1).split('.')[1].length : 0;
  const r2 = numToString(arg2).split('.')[1] ? numToString(arg2).split('.')[1].length : 0;
  const m = r1 + r2;
  return Number(numToString(arg1).replace(".", "")) * Number(numToString(arg2).replace(".", "")) / Math.pow(10, m)
};
```

### 使用：
```js
mulExact(19.9, 100) // 1990
mulExact(11, 12) // 132
mulExact(2.425, 100) // 242.5
mulExact(0.0000006, 100) // 0.00006
mulExact(6, 0.7) // 4.2
mulExact(0.1, 0.2) // 0.02
```

## divExact

两个数相除。

### 源码：
```js
/**
 * @description 两个数相除
 * @param {number} arg1 - 相除的第一个数
 * @param {number} arg2 - 相除的第二个数
 * @returns {number} 返回商数
 */
const divExact = (arg1, arg2) => {
  const r1 = numToString(arg1).split('.')[1] ? numToString(arg1).split('.')[1].length : 0;
  const r2 = numToString(arg2).split('.')[1] ? numToString(arg2).split('.')[1].length : 0;
  const t1 = Number(numToString(arg1).replace(".", ""));
  const t2 = Number(numToString(arg2).replace(".", ""));
  return (t1 / t2) * Math.pow(10, r2 - r1);
};
```

### 使用：
```js
divExact(0.3, 0.1) // 3
divExact(30, 5) // 6
divExact(1.12345, 0.1) // 11.2345
divExact(1.2, 0.2) // 6
```


[1]: https://github.com/MikeMcl/bignumber.js
[2]: https://github.com/MikeMcl/decimal.js
[3]: https://github.com/MikeMcl/big.js
[4]: https://mathjs.org/