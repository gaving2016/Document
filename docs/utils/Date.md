# 日期类

## formatDate

日期格式化。

### 源码：
```js
/**
 * @description 日期格式化
 * @param {date} date 日期
 * @param {string} fmt 格式化样式
 * @return {string} 返回格式后日期
 */
const formatDate = (date, fmt = "yyyy-MM-dd") => {
  if (!date) return "";
  let ret;
  const opt = {
    "y+": date.getFullYear().toString(),        // 年
    "M+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "m+": date.getMinutes().toString(),         // 分
    "s+": date.getSeconds().toString()          // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
};
```

### 使用：
```js
let date = new Date(2020,1,14)

formatDate(date) // "2020-02-14"
formatDate(date,"yyyy-MM-dd HH:mm:ss") // "2020-02-14 00:00:00"
formatDate(date,"yyyy年MM月dd日") // "2020年02月14日"
formatDate(date,"M月dd日") // "2月14日"
```

## isWeekend

判断是否为周末。

### 源码：
```js
/**
 * @description 判断是否为周末
 * @param {date} date 日期
 * @return {boolean} 
 */
const isWeekend = (date = new Date()) => {
  return date.getDay() % 6 === 0
};
```

### 使用：
```js
isWeekend(new Date(2020,1,14)) // false
isWeekend(new Date(2020,11,19)) // true
```

## isWeekday

判断是否为工作日。

### 源码：
```js
/**
 * @description 判断是否为工作日
 * @param {date} date 日期
 * @return {boolean} 返回
 */
const isWeekday  = (date = new Date()) => {
  return date.getDay() % 6 !== 0
};
```

### 使用：
```js
isWeekday(new Date(2020,1,14)) // true
isWeekday(new Date(2020,11,19)) // false
```