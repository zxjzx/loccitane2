import Vue from 'vue';
import Rule from './Rule.vue';
import router from '../router';

new Vue({
  el: '#rule',
  router,
  template: '<Rule/>',
  components: { Rule },
})
