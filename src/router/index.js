import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChangePassword from '@/page/ChangePassword'
import Logout from '@/page/Logout'
import Login from '@/page/login'
// src/page/login
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login, hidden: true },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/ChangePassword',
      name: 'ChangePassword',
      component: ChangePassword
    }
  ]
})
