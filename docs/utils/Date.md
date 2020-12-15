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