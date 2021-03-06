//整个项目的入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'  //单击事件 手机存在300ms延迟的问题。300ms点击事件延迟问题的解决方法，在项目中安装 npm install fastclick --save,并将fastclick添加在body中。
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图的引入  首先进行安装 npm install vue-awesome-swiper@2.6.7 --save，指定版本的安装
import store from './store'
import 'styles/reset.css' // 重置默认css样式
import 'styles/border.css'// 1像素边框问题，
import 'styles/iconfont.css'
import 'babel-polyfill'
// require styles
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false

fastClick.attach(document.body)//将fastclick添加在body中
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // ES6中，当键值对中的键和值相同时，只需要写键
  router,
  store,
  // 下边定义局部组件的使用，就相当于我们之前的 App：App，表示键值对是一样的，只用写键值就可以了
  components: { App },
  template: '<App/>'
})
