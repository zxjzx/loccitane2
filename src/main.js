// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import './mock/mockjs'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '../theme/index.css'
import './assets/icon/iconfont.css'
import elementUIVerify from 'element-ui-verify'
import errorMessage from './config/error-message-template'

Vue.prototype.$http = axios
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
