# 存储类

## cookie

### setCookie

设置cookie。

#### 源码：
```js
/**
 * @description 设置cookie
 * @param {string} key - cookie名称
 * @param {string} value - cookie值
 * @param {number} expires - 过期时间（天）
 * @returns {undefined}
 */
const setCookie = (key, value, expires) => {
  if (!key || !value) return
  let expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() + expires);
  document.cookie = key + '=' + value + ';expires=' + expiresDate.toUTCString();
}
```

#### 使用：
```js
setCookie("username", "wangdaodao", 10);
```

### getCookie

获取cookie。

#### 源码：
```js
/**
 * @description 获取cookie
 * @param {string} key - 要获取的某个cookie键值
 * @returns {string} cookie值
 */
const getCookie = (key) => {
  const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  let cookies = document.cookie.match(reg);
  if (cookies) {
    return decodeURIComponent(cookies[2]);
  } else {
    return '';
  }
}
```

#### 使用：
```js
getCookie("username") // "wangdaodao"
```

### delCookie

删除cookie。

#### 源码：
```js
/**
 * @description 删除cookie
 * @param {string} key - 要删除的cookie键值
 * @returns {undefined}
 */
const delCookie = (key) => {
  let expires = new Date();
  expires.setTime(expires.getDate() - 1);
  let val = getCookie(key);
  if (val != null) {
    document.cookie = key + "=" + val + ";expires=" + expires.toUTCString();
  }
}
```

#### 使用：
```js
delCookie("username");
```

### clearCookie

清空cookie。

#### 源码：
```js
/**
 * @description 清空cookie
 * @returns {undefined}
 */
const clearCookie = () => {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys.length > 0) {
    for (var i = keys.length; i--;) {
      delCookie(keys[i])
    }
  }
}
```

#### 使用：
```js
clearCookie()
```

## localStorage

### setLStorage

存储localStorage

#### 源码：
```js
/**
 * @description 存储localStorage
 * @param {string} key 
 * @param {any} value 
 */
const setLStorage = (key, value) => {
  if (typeof value == 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}
```

#### 使用：
```js
setLStorage("username", "wangdaodao");
```

### getLStorage

取出localStorage

#### 源码：
```js
/**
 * @description 取出localStorage
 * @param {string} key 
 * @returns {any}
 */
const getLStorage = (key) => {
  return localStorage.getItem(key);
}
```

#### 使用：
```js
getLStorage("username") // "wangdaodao"
```

### delLStorage

删除localStorage

#### 源码：
```js
/**
 * @description 删除localStorage
 * @param {string} key 
 */
const delLStorage = (key) => {
  if (!key) return
  localStorage.removeItem(key);
}
```

#### 使用：
```js
delLStorage("username");
```

### clearLStorage

清空localStorage

#### 源码：
```js
/**
 * @description 清空localStorage
 * @param {string} key 
 */
const clearLStorage = () => {
  localStorage.clear();
}
```

#### 使用：
```js
clearLStorage()
```

## sessionStorage

### setSStorage

存储sessionStorage

#### 源码：
```js
/**
 * @description 存储sessionStorage
 * @param {string} key 
 * @param {any} value 
 */
const setSStorage = (key, value) => {
  if (typeof value == 'object') {
    value = JSON.stringify(value);
  }
  sessionStorage.setItem(key, value);
}
```

#### 使用：
```js
setSStorage("username", "wangdaodao");
```

### getSStorage

取出sessionStorage

#### 源码：
```js
/**
 * @description 取出sessionStorage
 * @param {string} key 
 * @returns {any}
 */
const getSStorage = (key) => {
  return sessionStorage.getItem(key);
}
```

#### 使用：
```js
getSStorage("username") // "wangdaodao"
```

### delSStorage

删除sessionStorage

#### 源码：
```js
/**
 * @description 删除sessionStorage
 * @param {string} key 
 */
const delSStorage = (key) => {
  if (!key) return
  sessionStorage.removeItem(key);
}
```

#### 使用：
```js
delSStorage("username");
```

### clearSStorage

清空sessionStorage

#### 源码：
```js
/**
 * @description 清空sessionStorage
 * @param {string} key 
 */
const clearSStorage = () => {
  sessionStorage.clear();
}
```

#### 使用：
```js
clearSStorage()
```