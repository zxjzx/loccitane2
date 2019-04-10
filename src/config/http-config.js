import httpRequest from './http';
import Vue from 'vue';
import axios from 'axios'
import Utils from './utils'
import router from '../router'

window.axios = axios

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
  }, 0)
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
