import Vue from 'vue';
import Rule from './login.vue';
import router from '../router/ruleRouter';
import ElementUI from 'element-ui';
Vue.use(ElementUI)

new Vue({
  el: '#login',
  router,
  template: '<Rule/>',
  components: { Rule },
})
