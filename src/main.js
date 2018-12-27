// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import './mock/mockjs'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '../theme/index.css'
import './assets/icon/iconfont.css'
import './assets/scss/element-variables.scss'
import elementUIVerify from 'element-ui-verify'
import errorMessage from './config/error-message-template'
import httpRequest from './config/http'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCEYfbHxmHllvijotlW-XBmZasJLjKEYic',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})
window.axios = axios
const bus = new Vue()
window.bus = bus

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:1001/' : ''
// window.httpRequest = httpRequest.methods
Vue.prototype.$http = httpRequest.methods

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
