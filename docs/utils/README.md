# Cafe-Utils

![NPM version](https://img.shields.io/npm/v/cafe-utils.svg)

`cafe-utils` 是对常用函数的封装，方便在实际项目中使用，主要内容包含：类型判断、表单验证、字符串类、数字类、金额类、日期类、浮点计算类、工具类、存储类、DOM类操作、事件处理相关函数等内容。

## 使用

### npm 安装

```shell
npm i cafe-utils
```

使用：

```shell
// 单独引用
import { uuid } from 'cafe-utils';
uuid();

// 整体引用
import * as cafeUtils from 'cafe-utils';
cafeUtils.uuid();
```

### CDN

```html
<script src="https://unpkg.com/cafe-utils/lib/utils.umd.min.js"></script>
<!-- 或者 -->
<script src="https://cdn.jsdelivr.net/npm/cafe-utils/lib/utils.umd.min.js"></script>
```

使用：

```js
cafeUtils.uuid()
```

## Jest功能覆盖

File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
--------------------|---------|----------|---------|---------|----------------------
All files           |   94.88 |    83.33 |   88.17 |   94.12 |                      
 depend             |     100 |      100 |     100 |     100 |                      
  numToString.ts    |     100 |      100 |     100 |     100 |                      
 modules            |   94.86 |     83.2 |   88.11 |   94.08 |                      
  array.ts          |     100 |      100 |     100 |     100 |                      
  cookies.ts        |     100 |       80 |     100 |     100 | 46-57
  date.ts           |     100 |      100 |     100 |     100 | 
  dom.ts            |      40 |        0 |       0 |   28.57 | 15-17,27,37-39,50-53
  event.ts          |   30.77 |     7.69 |   22.22 |      28 | 16-27,42-49,64-71   
  floatCalculate.ts |     100 |      100 |     100 |     100 | 
  index.ts          |     100 |      100 |   86.25 |     100 | 
  money.ts          |   98.51 |    94.59 |     100 |   98.36 | 115
  number.ts         |     100 |      100 |     100 |     100 | 
  storage.ts        |     100 |      100 |     100 |     100 | 
  string.ts         |     100 |    94.29 |     100 |     100 | 71-90
  tools.ts          |     100 |     97.5 |     100 |     100 | 90
  type.ts           |     100 |      100 |     100 |     100 | 
  validator.ts      |     100 |      100 |     100 |     100 | 

## 更新记录

* 2020-12-18 **1.0.24**：  
  - 优化 `camelCase` 为  `toCamelCase`；
  - 优化 `kebabCase` 为  `fromCamelCase`；
  - 优化 `replaceHTMLTags` 为 `escapeHTML`；
  - 新增 `unescapeHTML`、`randomIntegerInRange`、`randomNumberInRange`、`initArrayFillValues`、`sample`；

* 2020-12-17 **1.0.23**：  
  - 新增 `stripHTMLTags`；
  - 修改 `filterTag` 为 `replaceHTMLTags`；

* 2020-12-17 **1.0.22**：  
  - 优化代码；

* 2020-12-17 **1.0.21**：  
  - 重构 `deepClone`；
  - 优化代码；

* 2020-12-17 **1.0.21**：  
  - 修复 `divExact`；
  - 优化 `uuid`；
  - 增加 `dayName`、`getTimestamp`、`fromTimestamp`

* 2020-12-16 **1.0.20**：  
  - 优化代码

* 2020-12-16 **1.0.19**：  
  - 增加 `isWeekend`、`isWeekday`、`arrayMax`、`arrayMin`、`arrayChunk`、`flatten`、`deepFlatten`、`union`、`intersection`、`difference`

* 2020-12-15 **1.0.18**：  
  - 修改 `formatNum` 为 `formatStr`
  - 修复bug

* 2020-12-14 **1.0.17**：  
  - 修复bug

* 2020-12-14 **1.0.16**：  
  - 增加 `isPhone`、`isTel`、`isZIPCode`、`isEmail`、`isIDCard`、`isURL`、`isImg`、`isCar`、`isIPV4`、`isIPV6`

* 2020-12-14 **1.0.15**：  
  - 增加 `clearCookie`
  - 优化命名 `addExact`、`subExact`、`mulExact`、`divExact`、`setLStorage`、`getLStorage`、`delLStorage`、`clearLStorage`、`setSStorage`、`getSStorage`、`delSStorage`、`clearSStorage`

* 2020-12-12 **1.0.14**：  
  - 增加 `isObject`、`isArray`、`isDate`、`isNumber`、`isString`、`isBoolean`、`isFunction`、`isNull`

* 2020-12-12 **1.0.13**：  
  - 修改 `guid` 为 `randomId`
  - 增加 `uuid`
  - 删除 `openDB`、`addData`、`getDataByKey`、`cursorGetData`、`getDataByIndex`、`cursorGetDataByIndex`、`updateDB`、`deleteDB`、`cursorDelete`、`closeDB`、`deleteDBAll`

* 2020-12-12 **1.0.12**：  
  - 增加 `setLocalStorage`、`getLocalStorage`、`delLocalStorage`、`clearLocalStorage`、`setSessionStorage`、`delSessionStorage`、`clearSessionStorage`、`openDB`、`addData`、`getDataByKey`、`cursorGetData`、`getDataByIndex`、`cursorGetDataByIndex`、`updateDB`、`deleteDB`、`cursorDelete`、`closeDB`、`deleteDBAll`、`listener`、`on`、`off`

* 2020-12-11 **1.0.11**：  
  - 修复bug

* 2020-12-11 **1.0.10**：  
  - 增加 `toggleClass`、`convertMoney`

* 2020-12-10 **1.0.9**：  
  - 优化代码结构
  - 增加 `getCookie`、`setCookie`、`delCookie`、`hasClass`、`addClass`、`removeClass`

* 2020-12-10 **1.0.8**：  
  - 优化浮点精度计算

* 2020-12-09 **1.0.7**：  
  - 增加 `addExact`、`subtractExact`、`multiplyExact`、`divisionExact`

* 2020-12-09 **1.0.6**：  
  - 增加单元测试

* 2020-12-09 **1.0.5**：  
  - 增加 `getGbLen`、`subGbString`、`formatMoney`、`formatNum`、`toFixed`

* 2020-12-09 **1.0.4**：  
  - 增加 `trim`、`guid`、`camelCase`、`filterTag`、`changeCase`

* 2020-12-08 **1.0.3**：  
  - 重构，优化代码

* 2020-12-08 **1.0.2** ：  
  - 增加 `clone`、`cloneDeep`、`debounce`、`throttle`

* 2020-12-08 **1.0.0**
