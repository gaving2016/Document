# 金额类

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

## formatMoney

金额格式化。

### 源码：
```js
/**
 * @description 金额格式化
 * @param {number} num - 要格式化的数字
 * @param {string} char - 格式化字符
 * @param {string} pre - 首位格式化字符，默认为''
 * @returns {string}  返回格式化后的数字字符串
 */
export const formatMoney = (num, char, pre = '') => {
  if (typeof num !== 'number' || char === undefined || char === null
  ) {
    return numToString(num)
  }
  let res = ''
  const _strList = numToString(num).toString().split('.')
  let decimal = _strList[1]
  decimal = decimal || ''
  const formatStr = _strList[0]
    .replace(/(?!^)(?=(\d{3})+$)/g, char)
    .replace(/^/, pre)
  res = decimal ? formatStr + '.' + decimal : formatStr
  return res
};
```

### 使用：
```js
formatMoney(123456, ",")              // "123,456"
formatMoney(12345678, ",", "$")       // "$12,345,678"
formatMoney(12345678, "", "$")        // "$12345678"
formatMoney(12345678.8983, ",", "¥")  // "¥12,345,678.8983"
```

## convertMoney

金额转换成人民币大写。

### 源码：
```js
/**
 * @description 金额大写
 * @param {number} money - 要格式化的数字
 * @returns {string}  返回格式化后的数字字符串
 */
const convertMoney = (money) => {
  //汉字的数字
  let cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  let cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  let cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  let cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  let cnInteger = '整';
  //整型完以后的单位
  let cnIntLast = '元';
  //最大处理的数字
  let maxNum = 999999999999999.9999;
  //金额整数部分
  let integerNum;
  //金额小数部分
  let decimalNum;
  //输出的中文金额字符串
  let chineseStr = '';
  //分离金额后用的数组，预定义
  let parts;
  if (money == null) { return ''; }
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  let moneyStr = money.toString();
  if (moneyStr.indexOf('.') == -1) {
    integerNum = moneyStr;
    decimalNum = '';
  } else {
    parts = moneyStr.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
};
```

### 使用：

```js
convertMoney(168752632)       // "壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
convertMoney(108752632)       // "壹亿零捌佰柒拾伍万贰仟陆佰叁拾贰元整"
convertMoney(168752632.1234)  // "壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元壹角贰分叁毫肆厘"
convertMoney(0.1234)          // "壹角贰分叁毫肆厘"
```