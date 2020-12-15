# 概述

`cafe-utils` 是对常用函数的封装，方便在实际项目中使用，主要内容包含：类型判断、表单验证、字符串类、数字类、金额类、日期类、浮点计算类、工具类、存储类、DOM类操作、事件处理相关函数等内容。

## 使用

安装依赖包：

```shell
npm i cafe-utils
```

在项目中引用：

```shell
import { clone } from 'cafe-utils'
// or
import * as utils from 'cafe-utils';
```

## Jest功能覆盖

File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
--------------------|---------|----------|---------|---------|----------------------
All files           |   92.63 |    78.11 |   83.82 |   92.51 |                      
 depend             |    87.5 |    85.71 |     100 |    87.5 |                      
  isObj.ts          |     100 |      100 |     100 |     100 |                      
  numToString.ts    |      80 |       75 |     100 |      80 | 12                   
 modules            |   92.71 |    77.84 |   83.58 |    92.6 |                      
  cookies.ts        |   96.43 |       70 |     100 |     100 | 31-57
  date.ts           |     100 |      100 |     100 |     100 | 
  dom.ts            |      40 |        0 |       0 |   28.57 | 15-17,27,37-39,50-53
  event.ts          |   30.77 |     7.69 |   22.22 |      28 | 16-27,42-49,64-71   
  floatCalculate.ts |     100 |      100 |     100 |     100 | 
  index.ts          |     100 |      100 |   81.36 |     100 | 
  money.ts          |   98.51 |    94.59 |     100 |   98.36 | 115
  number.ts         |     100 |      100 |     100 |     100 | 
  storage.ts        |   93.75 |       75 |     100 |     100 | 34,72
  string.ts         |     100 |      100 |     100 |     100 | 
  tools.ts          |    96.3 |    88.89 |     100 |   95.74 | 22,35
  type.ts           |     100 |      100 |     100 |     100 | 
  validator.ts      |     100 |      100 |     100 |     100 | 


## 更新记录

* 2020-12-14 **1.0.16**：  
  - 增加 `isPhone`, `isTel`, `isZIPCode`, `isEmail`, `isIDCard`, `isURL`, `isImg`, `isCar`, `isIPV4`, `isIPV6`

* 2020-12-14 **1.0.15**：  
  - 增加 `clearCookie`
  - 优化命名 `addExact`, `subExact`, `mulExact`, `divExact`, `setLStorage`, `getLStorage`, `delLStorage`, `clearLStorage`, `setSStorage`, `getSStorage`, `delSStorage`, `clearSStorage`

* 2020-12-12 **1.0.14**：  
  - 增加 `isObject`, `isArray`, `isDate`, `isNumber`, `isString`, `isBoolean`, `isFunction`, `isNull`

* 2020-12-12 **1.0.13**：  
  - 修改 `guid` 为 `randomId`
  - 增加 `uuid`
  - 删除 `openDB`, `addData`, `getDataByKey`, `cursorGetData`, `getDataByIndex`, `cursorGetDataByIndex`, `updateDB`, `deleteDB`, `cursorDelete`, `closeDB`, `deleteDBAll`

* 2020-12-12 **1.0.12**：  
  - 增加 `setLocalStorage`, `getLocalStorage`, `delLocalStorage`, `clearLocalStorage`, `setSessionStorage`, `delSessionStorage`, `clearSessionStorage`, `openDB`, `addData`, `getDataByKey`, `cursorGetData`, `getDataByIndex`, `cursorGetDataByIndex`, `updateDB`, `deleteDB`, `cursorDelete`, `closeDB`, `deleteDBAll`, `listener`, `on`, `off`

* 2020-12-11 **1.0.11**：  
  - 修复bug

* 2020-12-11 **1.0.10**：  
  - 增加 `toggleClass`, `convertMoney`

* 2020-12-10 **1.0.9**：  
  - 优化代码结构
  - 增加 `getCookie`, `setCookie`, `delCookie`, `hasClass`, `addClass`, `removeClass`

* 2020-12-10 **1.0.8**：  
  - 优化浮点精度计算

* 2020-12-09 **1.0.7**：  
  - 增加 `addExact`, `subtractExact`, `multiplyExact`, `divisionExact`

* 2020-12-09 **1.0.6**：  
  - 增加单元测试

* 2020-12-09 **1.0.5**：  
  - 增加 `getGbLen`, `subGbString`, `formatMoney`, `formatNum`, `toFixed`

* 2020-12-09 **1.0.4**：  
  - 增加 `trim`, `guid`, `camelCase`, `filterTag`, `changeCase`

* 2020-12-08 **1.0.3**：  
  - 重构，优化代码

* 2020-12-08 **1.0.2** ：  
  - 增加 `clone`, `cloneDeep`, `debounce`, `throttle`

* 2020-12-08 **1.0.0**
