import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChangePassword from '@/page/ChangePassword'
import Logout from '@/page/Logout'
import Login from '@/page/login'
import getMyTable from '@/page/home/get-my-table.vue'
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
    },
    {
      path: '/getMyTable',
      name: 'getMyTable',
      component: getMyTable
    }
  ]
})
