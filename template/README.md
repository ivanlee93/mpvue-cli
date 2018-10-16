感谢
[@spencer1994](https://github.com/spencer1994)
[@F-loat](https://github.com/F-loat)
[@HelloZJW](https://github.com/HelloZJW)
大神们分享的源码

## 基本用法
``` bash
$ npm install -g vue-cli
$ vue init ivanlee93/mpvue-cli mpvuesimple
$ cd mpvuesimple
$ npm install
$ npm run dev
```
      
## 优化官方的脚手架，整合优秀开源插件，使开发风格更接近Vue/Vuex
> [flyio](https://github.com/wendux/fly/blob/master/README-CH.md) 同时支持浏览器、小程序、Node、Weex的基于Promise的跨平台http请求库。可以让您在多个端上尽可能大限度的实现代码复用。

> [minapp-api-promise](https://github.com/bigmeow/minapp-api-promise) 将所有异步微信小程序API promise化，支持then/catch、async/await的方式调用小程序API;支持请求队列，支持对原生API进行拦截。

> [mpvue-entry](https://github.com/F-loat/mpvue-entry) 集中式页面配置，避免重复编辑各页面的 main.js 文件，优化目录结构。

> [mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch) 在 mpvue 中使用 vue-router 兼容的路由写法。
           
## 根据官方的cli封装了一系列的开发基础
感谢[@spencer1994](https://github.com/spencer1994)，在他开源的源码基础上进行增强并整合到最新的mpvue上面

主要的开发便利包含如下：

> 1. 使用了[mpvue-entry](https://github.com/F-loat/mpvue-entry)

优点：去除了各个子页面的main.js，创建了pages.js，集中式页面配置，使开发更贴近vue风格。

[2018-05-24] 更新了mpvue-entry的版本=>1.1.7，支持热更新，不需要重启。

[2018-09-07] 更新了v1.5.x 版本开始支持 mpvue-loader@^1.1.0 版本

> 2. 使用[flyio](https://github.com/wendux/fly/blob/master/README-CH.md)并封装了请求，

优点：根据[vuex官方推荐](https://vuex.vuejs.org/zh-cn/intro.html)，将background API封装到actions中，具体用法可在代码里查看。

> 3. 使用[mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch)

优点：页面跳转直接可以用 vue-router 兼容的路由写法，开发体验更加接近Vue原生体验。

> 4. 使用[minapp-api-promise](https://github.com/bigmeow/minapp-api-promise)

优点：将所有异步微信小程序API promise化，支持then/catch、async/await的方式调用小程序API，具体用法可在代码里查看。

> 5. 在 App.vue 页面中添加一些小程序页面快速布局的样式类

优点：使用flex简单高效快速布局，并且兼容多设备端

> 6. 自动注册store

优点：多人协作开发不需要担心代码冲突，不需要每个store.js都要import引入。


### 以下是关于第6点的说明：
### 根据webpack的require.context及store的registerModule方法来自动注册store的modules
>在src下增加store文件夹。具体目录如下
``` js
  |__src
    |__store
      |__modlues
        |__counter.js
        |__demo.js
      |__index.js
```

>index.js的代码如下：
``` js
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({})

const storeContext = require.context('@/store/modules', true, /\.js$/)

storeContext.keys().forEach((modules) => {
  store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
})

Vue.prototype.$store = store
export default store

```

>src/main.js代码如下：
``` js
import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import IboxPlugin from '@/plugins/ibox'
import WXP from 'minapp-api-promise'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(IboxPlugin)
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.prototype.$wx = WXP
App.store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

```

> 在页面中使用如下

在单独的页面store.js中增加了namespaced:true。需要根据文件名来区分state及commit，这样子不同的store中的方法重名也不需要担心出错了。具体使用可以加actions，使用vuex的mapState、mapActions辅助函数方便使用。

``` js
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      count: state => state.counter.count
    })
  },
  methods: {
   ...mapActions('counter', [
      'increment',
      'decrement'
    ])
  }
}
```

## 目录结构
```
|____build              webpack打包的环境代码
|____config             webpack打包的配置文件
|____node_modules       项目运行依赖的npm包
|____src                项目代码文件夹
 |__components          自定义组件
 |__packageA            分包页面组件
 |__pages               页面组件
 |__plugins             vue插件
  |__ibox
   |__index.js          vue插件的注册，包含接口请求及工具utils
   |__utils.js          工具类及共用方法注册js
  |__flyio          
   |__apiUrl            接口请求地址管理
   |__config            接口请求配置管理
   |__interceptors.js   接口请求拦截器
   |__request           接口请求封装（包括loading及toast，接口的定制化配置及默认配置)
  |__modules            store的管理文件
  |__index.js           实现store对modules文件下的自动注册
 |__store               vuex状态管理
 |__app.json            小程序app.json配置
 |__App.vue             小程序的App页面【整合了小程序页面快速布局的一些样式类】
 |__main.js             类似vue的main.js，可以插件进行配置
 |__pages.js            小程序的page.json的配置 集中式页面配置
|____static             静态资源文件夹
|____.babelrc           es6语法转换配置文件
|____.editorconfig      编辑器配置
|____.eslintignore      eslint的忽略配置
|____.eslintrc.js       eslint配置
|____.gitignore         git push忽略配置
|____.postcssrc.js      postcss插件的配置文件
|____index.html         SPA的index页面
|____package.json       npm包配置文件
|____README.md          readme文档

```

## 整合后的稳定性如何？
可以放心使用，几个整合的插件都是官方推荐的，并且经过了自己的测试，上线了几个小程序，运行稳定。

  
# 坑

1.[config.js中配置与后台规定的表示响应成功的变量](https://github.com/Meituan-Dianping/mpvue/issues/562)，否则会导致接口返回异常。

2.[vue文件中不能缺少script标签](https://github.com/Meituan-Dianping/mpvue/issues/562)，否则会导致编译不了。

3.每个页面都要适配iphoneX，padding-bottom: 34px。可参考其他页面实现方式。注：底部无操作的话就不用将页面顶上去。

4.slot插槽数据渲染有问题 https://github.com/Meituan-Dianping/mpvue/issues/427

5.页面初始化的data方式 Object.assign(this.$data, this.$options.data())
