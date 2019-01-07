import Vue from 'vue';
import Rule from './login.vue';
import router from '../router/ruleRouter';

new Vue({
  el: '#login',
  router,
  template: '<Rule/>',
  components: { Rule },
})
