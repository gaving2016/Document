# 字符串类

## formatStr

按规则格式化。

### 源码：
```js
/**
 * @description 格式化字符串
 * @param {string} str 字符串
 * @param {number} len 位数
 * @param {string} char - 格式化字符
 * @returns {string}
 */
const formatStr = (str, len, char) => {
  let reg = new RegExp("\\d{1," + len + "}", "g");
  return str.match(reg).join(char);
};
```

### 使用：
```js
formatStr("999999999", 3, "-") // 999-999-999
formatStr("abcdefg", 4, "-") // abcd-efg
```

## camelCase

短横线转驼峰。

### 源码：
```js
/**
 * @description 短横线转驼峰
 * @param {string} str 字符串
 * @returns {string}
 */
const camelCase = (str) => {
  return str.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};
```

### 使用：
```js
camelCase("a-bcd-ef") // aBcdEf
```

## kebabCase

驼峰转短横线。

### 源码：
```js
/**
 * @description 驼峰转短横线
 * @param {string} str 字符串
 * @returns {string}
 */
const kebabCase = (str) => {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};
```

### 使用：
```js
kebabCase("aBcdEf") // a-bcd-ef
```

## trim

去除空格，。

### 源码：
```js
/**
 * @description 去除空格
 * @param {string} str 字符串
 * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {string}
 */
const trim = (str, type) => {
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '');
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '');
    case 3:
      return str.replace(/(^\s*)/g, '');
    case 4:
      return str.replace(/(\s*$)/g, '');
    default:
      return str;
  }
};
```

### 使用：
```js
let str = " abc de f "

trim(str)   // "abcdef"
trim(str,1) // "abcdef"
trim(str,2) // "abc de f"
trim(str,3) // "abc de f "
trim(str,4) // " abc de f"
```

## replaceHTMLTags

转换html代码。

### 源码：
```js
/**
 * @description 转换html代码
 * @param {string} str 字符串
 * @returns {string}
 */
const replaceHTMLTags = (str) => {
  str = str.replace(/&/gi, '&amp;');
  str = str.replace(/</gi, '&lt;');
  str = str.replace(/>/gi, '&gt;');
  str = str.replace(' ', '&nbsp;');
  return str;
};
```

### 使用：
```js
replaceHTMLTags("<span class='aaa'>hello</span>") // "&lt;span&nbsp;class='aaa'&gt;hello&lt;/span&gt;"
```

## stripHTMLTags

过滤html标签。

### 源码：
```js
/**
 * @description 过滤html标签
 * @export
 * @param {string} str 字符串
 * @returns {string}
 */
const stripHTMLTags = (str) => {
  return str.replace(/<[^>]*>/g, '');
};
```

### 使用：
```js
stripHTMLTags("<p><em>wang</em> <strong>daodao</strong></p>") // "wang daodao"
```

## subGbString

截取字符，区分中英文，中文占两字符，空格占一字符。

### 源码：
```js
/**
 * @description 截取字符，区分中英文，中文两字符，空格一字符
 * @param {String} str - 字符串
 * @param {Number} len - 字符串截取长度
 * @returns {String} - 返回截取后字符
 */
const subGbString = (str, len) => {
  const regexp = /[^\x00-\xff]/g // 正则表达式匹配中文
  // 当字符串字节长度小于指定的字节长度时
  if (str.replace(regexp, 'aa').length <= len) {
    return str
  }
  // 假设指定长度内都是中文
  const m = Math.floor(len / 2)
  for (let i = m, j = str.length; i < j; i++) {
    // 当截取字符串字节长度满足指定的字节长度
    if (str.substring(0, i).replace(regexp, 'aa').length >= len) {
      return str.substring(0, i)
    }
  }
};
```

### 使用：
```js
let str1 = "截取字符，区分中英文"
let str2 = "subGbString"
let str3 = "subGbString 截取字符，区分中英文"

subGbString(str1,4)   // "截取"
subGbString(str1,100) // "截取字符，区分中英文"
subGbString(str2,4)   // "subG"
subGbString(str3,14)  // "subGbString 截"
```

## getGbLen

判断字符长度，区分中英文，包括空格。

### 源码：
```js
/**
 * @description 判断字符长度，区分中英文，包括空格
 * @param {String} str - 字符串
 * @returns {Number} - 返回字符长度
 */
const getGbLen = (str) => {
  let len = 0
  const content = str || ''
  for (let i = 0; i < content.length; i++) {
    if (content.charCodeAt(i) > 127 || content.charCodeAt(i) === 94) {
      len += 2
    } else {
      len++
    }
  }
  return len
};
```

### 使用：
```js
let str1 = "判断字符长度"
let str2 = "getGbLen"
let str3 = "getGbLen 判断字符长度，区分中英文"

getGbLen(str1) // 12
getGbLen(str2) // 8
getGbLen(str3) // 33
```

## changeCase

字符串写法转换。

### 源码：
```js
/**
 * @description 字符串写法转换
 * @param {string} str 字符串
 * @param {number} type 1:首字母大写其他小写  2：首页母小写其他大写  3：大小写转换  4：全部大写  5：全部小写
 * @returns {string}
 */
const changeCase = (str, type) => {
  type = type || 4;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word): string {
        return (
          word.substring(0, 1).toUpperCase() +
          word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word): string {
        return (
          word.substring(0, 1).toLowerCase() +
          word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str
        .split('')
        .map(function (word): string {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join('');
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};
```

### 使用：
```js
let str1 = "aBcdEf";
let str2 = "AbcdEf";

changeCase(str1)   // "ABCDEF"
changeCase(str1,1) // "Abcdef"
changeCase(str2,2) // "aBCDEF"
changeCase(str1,3) // "AbCDeF"
changeCase(str1,4) // "ABCDEF"
changeCase(str1,5) // "abcdef"
```