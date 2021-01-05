# HLS 播放器

![NPM version](https://img.shields.io/npm/v/hls-player.svg)

* 😊 基于 Vue + [`Video.js 7+`](https://github.com/videojs/video.js) 开发；
* 😂 支持现代浏览器；

## NPM安装

```bash
npm i hls-player --save
```

## CDN引用

目前可以通过 [unpkg.com/hls-player](https://unpkg.com/hls-player) 或者 [www.jsdelivr.com/package/npm/hls-player](https://www.jsdelivr.com/package/npm/hls-player) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/hls-player/dist/hls-player.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/hls-player/dist/hls-player.umd.min.js"></script>

<!-- 或者 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hls-player/dist/hls-player.css">
<script src="https://cdn.jsdelivr.net/npm/hls-player/dist/hls-player.umd.min.js"></script>
```

## 使用

### 全局使用

```js
// main.js
import Vue from 'vue'
import App from './App.vue'

import 'hls-player/dist/hls-player.css'
import hlsPlayer from 'hls-player'
Vue.use(hlsPlayer)
```

```vue
<template>
  <div id="app">
    <hls-player :width="900" :height="500" :autoplay="true" :muted="true" :controls="true" ref="myPlayer" :source="src"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      src:"http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
    };
  }
};
</script>
```

### 局部使用

```vue
<template>
  <div id="app">
    <hls-player :width="900" :height="500" :autoplay="true" :muted="true" :controls="true" ref="myPlayer" :source="src"/>
  </div>
</template>

<script>
import 'hls-player/dist/hls-player.css'
import hlsPlayer from 'hls-player'

export default {
  name: 'App',
  components: {
    hlsPlayer,
  },
  data() {
    return {
      src:"http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
    };
  }
};
</script>
```

### hlsPlayer Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| source | 播放流 | string | — | — |
| width | 宽度 | number | — | 800 |
| height | 高度 | number | — | 600 |
| poster | 视频封面 | string | — | — |
| muted | 是否静音 | boolean | — | false |
| autoplay | 是否自动播放(浏览器限制，必须轻音才可自动播放) | boolean | — | true |
| controls | 是否显示控件 | boolean | — | true |
| preload | 预加载 | string | auto/metadata/none | auto |
| options | 高级设置会覆盖上面设置 | Object | — | — |

更多配置，请看 `VideoJS` [官方文档](https://docs.videojs.com/)

## 例子1 

[例子1](http://demo.const.team/hls/demo1.html)

```vue
<template>
  <div>
    <hls-player :options="options" :source="src" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        muted: true,
        autoplay: true,
        controls: true,
        preload: "auto",
        width: 800,
        height:400,
      },
      src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
    };
  }
};
</script>
```

## 例子2

[例子2](http://demo.const.team/hls/demo2.html)

```vue
<template>
  <div class="home">
    <button @click="change(1)">央视1</button>
    <button @click="change(2)">央视2</button>
    <button @click="change(3)">央视3</button>
    <button @click="change(4)">央视4</button>
    <hls-player :width="900" :height="500" :autoplay="true" :controls="true" :source="src"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      src: "",
    };
  },
  methods: {
    change(val){
      switch (val) {
        case 1:
          this.src = "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
          break;
        case 2:
          this.src = "http://ivi.bupt.edu.cn/hls/cctv2hd.m3u8"
          break;
        case 3:
          this.src = "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8"
          break;
        case 4:
          this.src = "http://ivi.bupt.edu.cn/hls/cctv4hd.m3u8"
          break;
      }
    }
  }
};
</script>
```

## 测试地址

```
CCTV-1综合：http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8
CCTV-2财经：http://ivi.bupt.edu.cn/hls/cctv2hd.m3u8
CCTV-3综艺：http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8
CCTV-4中文国际：http://ivi.bupt.edu.cn/hls/cctv4hd.m3u8
CCTV-5体育：http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8
CCTV-6电影：http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8
CCTV-7国防军事：http://ivi.bupt.edu.cn/hls/cctv7hd.m3u8
CCTV-8电视剧：http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8
CCTV-9纪录：http://ivi.bupt.edu.cn/hls/cctv9hd.m3u8
CCTV-10科教：http://ivi.bupt.edu.cn/hls/cctv10hd.m3u8
CCTV-11戏曲：http://ivi.bupt.edu.cn/hls/cctv11.m3u8
CCTV-12社会与法：http://ivi.bupt.edu.cn/hls/cctv12hd.m3u8
CCTV-13新闻：http://ivi.bupt.edu.cn/hls/cctv13.m3u8
CCTV-14少儿：http://ivi.bupt.edu.cn/hls/cctv14hd.m3u8
CCTV-15音乐：http://ivi.bupt.edu.cn/hls/cctv15.m3u8
CCTV-17农业农村：http://ivi.bupt.edu.cn/hls/cctv17hd.m3u8
CGTN：http://ivi.bupt.edu.cn/hls/cgtnhd.m3u8
CGTN DOC：http://ivi.bupt.edu.cn/hls/cgtndochd.m3u8
CHC：http://ivi.bupt.edu.cn/hls/chchd.m3u8
北京卫视高清：http://ivi.bupt.edu.cn/hls/btv1hd.m3u8
北京文艺高清：http://ivi.bupt.edu.cn/hls/btv2hd.m3u8
北京科教：http://ivi.bupt.edu.cn/hls/btv3.m3u8
北京影视高清：http://ivi.bupt.edu.cn/hls/btv4hd.m3u8
北京财经：http://ivi.bupt.edu.cn/hls/btv5.m3u8
北京生活：http://ivi.bupt.edu.cn/hls/btv7.m3u8
北京青年：http://ivi.bupt.edu.cn/hls/btv8.m3u8
北京新闻高清：http://ivi.bupt.edu.cn/hls/btv9hd.m3u8
北京卡酷少儿：http://ivi.bupt.edu.cn/hls/btv10.m3u8
湖南卫视高清：http://ivi.bupt.edu.cn/hls/hunanhd.m3u8
浙江卫视高清：http://ivi.bupt.edu.cn/hls/zjhd.m3u8
江苏卫视高清：http://ivi.bupt.edu.cn/hls/jshd.m3u8
东方卫视高清：http://ivi.bupt.edu.cn/hls/dfhd.m3u8
安徽卫视高清：http://ivi.bupt.edu.cn/hls/ahhd.m3u8
黑龙江卫视高清：http://ivi.bupt.edu.cn/hls/hljhd.m3u8
辽宁卫视高清：http://ivi.bupt.edu.cn/hls/lnhd.m3u8
深圳卫视高清：http://ivi.bupt.edu.cn/hls/szhd.m3u8
广东卫视高清：http://ivi.bupt.edu.cn/hls/gdhd.m3u8
天津卫视高清：http://ivi.bupt.edu.cn/hls/tjhd.m3u8
湖北卫视高清：http://ivi.bupt.edu.cn/hls/hbhd.m3u8
山东卫视高清：http://ivi.bupt.edu.cn/hls/sdhd.m3u8
重庆卫视高清：http://ivi.bupt.edu.cn/hls/cqhd.m3u8
上海纪实高清：http://ivi.bupt.edu.cn/hls/docuchina.m3u8
金鹰纪实高清：http://ivi.bupt.edu.cn/hls/gedocu.m3u8
福建东南卫视高清：http://ivi.bupt.edu.cn/hls/dnhd.m3u8
四川卫视高清：http://ivi.bupt.edu.cn/hls/schd.m3u8
河北卫视高清：http://ivi.bupt.edu.cn/hls/hebhd.m3u8
江西卫视高清：http://ivi.bupt.edu.cn/hls/jxhd.m3u8
河南卫视高清：http://ivi.bupt.edu.cn/hls/hnhd.m3u8
广西卫视高清：http://ivi.bupt.edu.cn/hls/gxhd.m3u8
吉林卫视高清：http://ivi.bupt.edu.cn/hls/jlhd.m3u8
CETV-1高清：http://ivi.bupt.edu.cn/hls/cetv1hd.m3u8
海南卫视高清：http://ivi.bupt.edu.cn/hls/lyhd.m3u8
贵州卫视高清：http://ivi.bupt.edu.cn/hls/gzhd.m3u8
```
