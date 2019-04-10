// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '../mock/mockjs'
import App from './index.vue'
import router from '../router/index'
import ElementUI from 'element-ui'
import * as VueGoogleMaps from 'vue2-google-maps'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import '../../theme/index.css'
import '../assets/icon/iconfont.css'

import elementUIVerify from 'element-ui-verify'
import errorMessage from '../config/error-message-template'

import '../config/buryPoint';
import '../config/http-config'


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

const bus = new Vue()
window.bus = bus



/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: {App},
  template: '<App/>'
})
