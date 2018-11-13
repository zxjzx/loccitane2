import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChangePassword from '@/page/ChangePassword'
import Logout from '@/page/Logout'
import Login from '@/page/login'
import getMyTable from '@/page/home/get-my-table'
import HtmlCss from '@/page/home/html-css'
import HtmlCssJS from '@/page/home/html-css-js'
import HtmlCssFlex from '@/page/home/html-css-flex'
import shop from '@/page/shop/shop'
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
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/html-css',
      name: 'html-css',
      component: HtmlCss
    },
    {
      path: '/html-css-js',
      name: 'html-css-js',
      component: HtmlCssJS
    },
    {
      path: '/html-css-flex',
      name: 'html-css-flex',
      component: HtmlCssFlex
    }
  ]
})
