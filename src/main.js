// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import './mock/mockjs'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import { Loading } from 'element-ui';

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import '../theme/index.css'
import './assets/icon/iconfont.css'
import './assets/scss/element-variables.scss'
import './assets/scss/global.scss'

import elementUIVerify from 'element-ui-verify'
import errorMessage from './config/error-message-template'
import httpRequest from './config/http'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCEYfbHxmHllvijotlW-XBmZasJLjKEYic',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})
window.axios = axios
const bus = new Vue()
window.bus = bus

Vue.prototype.$http = httpRequest.methods
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:1001/' : ''
  //  添加响应拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config);
  Loading.service({ fullscreen: true,text: 'Loading', spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)',lock: true,});
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response);
  //关闭loading
  setTimeout(function () {
    Loading.service().close()
  },0)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



Vue.use(ElementUI)
Vue.use(elementUIVerify, {
  errorMessageTemplate: errorMessage,
  fieldChange: 'verify'
})
elementUIVerify.getErrorMessage('lte', {MDL: 2})

locale.use(lang)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
