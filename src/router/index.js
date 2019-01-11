import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChangePassword from '@/page/ChangePassword'
import Logout from '@/page/Logout'
import Login from '@/page/login'
import getMyTable from '@/page/style/get-my-table'
import HtmlCss from '@/page/style/html-css'
import HtmlCssJS from '@/page/style/html-css-js'
import HtmlCssFlex from '@/page/style/html-css-flex'
import shop from '@/page/shop/shop'
import UserList from '@/page/user/user-list'
import UserAdd from '@/page/user/user-add'
import UserEdit from '@/page/user/user-edit'
import Dashboard from '../components/Dashboard'
import Container from '../common/container'
import Empty from '../components/Empty'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', name: 'login', component: Login, hidden: true,},
    {path: '/dashboard', name: 'dashboard', component: Dashboard, hidden: true,},
    {
      path: '/', name: 'container', redirect: 'hello', component: Container,
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: HelloWorld,
          meta: {title: 'HelloWorld', icon: 'el-icon-third-location'}
        },
        {path: 'logout', name: 'logout', component: Logout, meta: {title: '退出', icon: 'el-icon-third-location'}},
        {
          path: 'changePassword',
          name: 'changePassword',
          component: ChangePassword,
          meta: {title: '忘记密码', icon: 'el-icon-third-location'}
        },
        {
          path: 'style', name: 'style', component: Empty, meta: {title: 'style', icon: 'el-icon-third-booking'},
          children: [
            {
              path: 'getMyTable',
              name: 'getMyTable',
              component: getMyTable,
              meta: {title: 'getMyTable', icon: 'el-icon-third-location'}
            },
            {path: 'shop', name: 'shop', component: shop, meta: {title: 'shop', icon: 'el-icon-third-product'}},
            {
              path: 'html-css',
              name: 'html-css',
              component: HtmlCss,
              meta: {title: 'html-css', icon: 'el-icon-third-product'}
            },
            {
              path: 'html-css-js',
              name: 'html-css-js',
              component: HtmlCssJS,
              meta: {title: 'html-css-js', icon: 'el-icon-third-product'}
            },
            {
              path: 'html-css-flex',
              name: 'html-css-flex',
              component: HtmlCssFlex,
              meta: {title: 'html-css-js', icon: 'el-icon-third-product'}
            },
          ]
        },
        {
          path: 'user-list',
          name: 'user-list',
          component: Empty,
          meta: {title: 'user list', icon: 'el-icon-third-commission'},
          children: [
            {path: '/', name: 'user-list', component: UserList},
            {path: 'user-add', name: 'user-add', component: UserAdd,meta: {title: 'add user', icon: 'el-icon-third-product'}},
            {path: 'user-edit/:id', name: 'user-edit', component: UserEdit,meta: {title: 'edit user', icon: 'el-icon-third-product'}}
          ]
        },
      ]
    },

  ]
})
