import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import ChangePassword from '../page/ChangePassword'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', component: Login, hidden: true},
    {path: '/changepassword', component: ChangePassword, hidden: true},
  ]
})
