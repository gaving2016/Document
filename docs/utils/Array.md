# 数组类

## arrayMax

返回数组中的最大值。

### 源码：
```js
/**
 * @description 返回数组中的最大值
 * @param {array} arr
 * @returns {number}  返回最大值
 */
const arrayMax = (arr) => {
  return Math.max(...arr)
};
```

### 使用：
```js
arrayMax([10, 1, 5]) // 10
```

## arrayMin

返回数组中的最小值。

### 源码：
```js
/**
 * @description 返回数组中的最小值
 * @param {array} arr
 * @returns {number}  返回最小值
 */
const arrayMin = (arr) => {
  return Math.min(...arr)
};
```

### 使用：
```js
arrayMin([10, 1, 5]) // 1
```

## arrayChunk

将数组块划分为指定大小的数组。

### 源码：
```js
/**
 * @description 将数组块划分为指定大小的数组
 * @param {array} arr
 * @param {number} size 切割长度
 * @returns {array}  返回切割后的数组
 */
const arrayChunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
};
```

### 使用：
```js
arrayChunk([1,2,3,4,5], 2) // [[1,2],[3,4],[5]]
```

## flatten

指定扁平化数组。

### 源码：
```js
/**
 * @description 指定扁平化数组
 * @param {array} arr
 * @param {number} depth 深度
 * @returns {array}  返回扁平后的数组
 */
const flatten = (arr, depth = 1) => {
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
};
```

### 使用：
```js
flatten([1, [2], 3, 4]) // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2) // [1, 2, 3, [4, 5], 6, 7, 8]
```

## deepFlatten

深度扁平化数组。

### 源码：
```js
/**
 * @description 深度扁平化数组
 * @param {array} arr
 * @returns {array}  返回扁平后的数组
 */
const deepFlatten = (arr) => {
  return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
};
```

### 使用：
```js
deepFlatten([1, [2, [3, [4, 5], 6], 7], 8]) // [1, 2, 3, 4, 5, 6, 7, 8]
```

## union

数组并集。

### 源码：
```js
/**
 * @description 数组并集
 * @param {array} a
 * @param {array} b
 * @returns {array}  返回ab数组的并集
 */
const union = (a, b) => {
  return Array.from(new Set([...a, ...b]));
};
```

### 使用：
```js
union([1, 2, 3], [4, 3, 2]) // [1, 2, 3, 4]
```

## intersection

数组交集。

### 源码：
```js
/**
 * @description 数组交集
 * @param {array} a
 * @param {array} b
 * @returns {array}  返回ab数组的交集
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};
```

### 使用：
```js
intersection([1, 2, 3], [4, 3, 2]) // [2, 3]
```

## difference

数组差集。

### 源码：
```js
/**
 * @description 数组差集
 * @param {array} a
 * @param {array} b
 * @returns {array}  返回ab数组的差集
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

### 使用：
```js
difference([1, 2, 3], [4, 1, 2]) // [3]
```