// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import './mock/mockjs'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import * as VueGoogleMaps from 'vue2-google-maps'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import '../theme/index.css'
import './assets/icon/iconfont.css'
import './assets/scss/element-variables.scss'
import './assets/scss/global.scss'

import elementUIVerify from 'element-ui-verify'
import errorMessage from './config/error-message-template'
import httpRequest from './config/http'
import Utils from './config/utils'

Vue.use(ElementUI)
Vue.use(elementUIVerify, {
  errorMessageTemplate: errorMessage,
  fieldChange: 'verify'
})
elementUIVerify.getErrorMessage('lte', {MDL: 2})

locale.use(lang)
Vue.config.productionTip = false

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

// loading框设置局部刷新，且所有请求完成后关闭loading框

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  Utils.startLoading()
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

axios.interceptors.request.use(config => {
  console.log(config)
  Utils.startLoading()
  return config
}, error => {
  // 对请求错误做些什么
  Utils.message({
    showClose: true,
    message: '请求超时!',
    type: 'error'
  })

  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  setTimeout(function () {
    Utils.endLoading()
  }, 1000)
  return response
}, error => {
  // 对响应错误做点什么
  Utils.endLoading()
  if (error.response && error.response.status == 401) {
    Utils.message({
      message: '未经授权',
      type: 'warning'
    })
    router.push('/login')
  }
  if (error.response && error.response.status == 415) {
    Utils.message({
      message: '请求数据格式不对',
      type: 'warning'
    })
  }
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
