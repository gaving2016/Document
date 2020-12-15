# 常规验证类

## isPhone

手机号验证。

### 源码：
```js
/**
 * @description 判断手机号
 * @param {any} value 
 * @returns {boolean} 
 */
const isPhone = (value) => {
  let reg = /^1[3456789]\d{9}$/;
  return reg.test(value);
}
```

### 使用：
```js
isPhone(13439382630) // true
isPhone("13439382630") // true
isPhone(12439382630) // false
```

## isTel

固定电话验证。

### 源码：
```js
/**
 * @description 判断手机号
 * @param {any} value 
 * @returns {boolean} 
 */
const isPhone = (value) => {
  let reg = /^1[3456789]\d{9}$/;
  return reg.test(value);
}
```

### 使用：
```js
isPhone(13439382630) // true
isPhone("13439382630") // true
isPhone(12439382630) // false
```

## isZIPCode

邮政编码验证。

### 源码：
```js
/**
 * @description 判断邮政编码
 * @param {any} value 
 * @returns {boolean} 
 */
const isZIPCode = (value) => {
  let reg = /^[0-9]{6}$/;
  return reg.test(value);
}
```

### 使用：
```js
isZIPCode("475001") // true
isZIPCode("22-12333345678") // false
```

## isEmail

邮箱验证。

### 源码：
```js
/**
 * @description 判断邮箱
 * @param {any} value 
 * @returns {boolean} 
 */
const isEmail = (value) => {
  let reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
  return reg.test(value);
}
```

### 使用：
```js
isEmail('hi@wangdaodao.com') // true
isEmail('_hi@wangdaodao.com') // false
```

## isIDCard

身份证验证，仅仅验证了15和18位身份证，没有对日期地区码做验证。

### 源码：
```js
/**
 * @description 判断身份证
 * @param {any} value 
 * @returns {boolean} 
 */
const isIDCard = (value) => {
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
}
```

### 使用：
```js
isIDCard("410927198802403090") // true
isIDCard("410927198802403090x") // false
```

## isURL

浏览器URL验证。

### 源码：
```js
/**
 * @description 判断URL
 * @param {any} value 
 * @returns {boolean} 
 */
const isURL = (value) => {
  let reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
  return reg.test(value);
}
```

### 使用：
```js
isURL('https://fanyi.baidu.com/#en/zh/Division') // true
isURL('ftp://fanyi.baidu.com/#en/zh/Division') // false
```

## isImg

图片格式验证。

### 源码：
```js
/**
 * @description 判断图片格式
 * @param {any} value 
 * @returns {boolean} 
 */
const isImg = (value) => {
  let reg = /\.(png|jpg|gif|jpeg|webp)$/;
  return reg.test(value);
}
```

### 使用：
```js
isImg('aaa.jpg') // true
isImg('aaa.ico') // false
```

## isCar

车牌验证。

### 源码：
```js
/**
 * @description 判断车牌号码
 * @param {any} value 
 * @returns {boolean} 
 */
const isCar = (value) => {
  // 普通车
  let reg1 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
  // 新能源
  let reg2 = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/;
  if (value.length == 7) {
    return reg1.test(value.toUpperCase());
  } else if (value.length == 8) {
    return reg2.test(value.toUpperCase());
  } else {
    return false;
  }
}
```

### 使用：
```js
isCar('冀R377d6') // true
isCar('京AD12345') // true
isCar('京AD123458888') // false
```

## isIPV4/isIPV6

IP地址验证。

### 源码：
```js
/**
 * @description 判断IP地址
 * @param {any} value 
 * @returns {boolean} 
 */
const isIPV4 = (value) => {
  let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return reg.test(value);
}
const isIPV6 = (value) => {
  let reg = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/gm;
  return reg.test(value);
}
```

### 使用：
```js
isIPV4('10.0.204.61') // true
isIPV6('2001:DB8:0:23:8:800:200C:417A') // true
isIPV4('10.0.204.256') // false
```