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
    {path: '/login', component: Login, hidden: true, meta: {title: 'login', icon: 'el-icon-third-location'}},
    {path: '/dashboard',name: 'dashboard', component: Dashboard, hidden: true,},
    {path: '/', name: 'container',redirect:'hello', component: Container,meta: {title: 'dashboard', icon: 'el-icon-third-location'},
      children: [
        {path: 'hello', name: 'HelloWorld', component: HelloWorld,meta: {title: 'HelloWorld', icon: 'el-icon-third-location'}},
        {path: 'logout', name: 'Logout', component: Logout},
        {path: 'changePassword', name: 'ChangePassword', component: ChangePassword},
        {path:'style',name:'style',component: Empty,
          children:[
            {path: 'getMyTable', name: 'getMyTable', component: getMyTable},
            {path: 'shop', name: 'shop', component: shop},
            {path: 'html-css', name: 'html-css', component: HtmlCss},
            {path: 'html-css-js', name: 'html-css-js', component: HtmlCssJS},
            {path: 'html-css-flex', name: 'html-css-flex', component: HtmlCssFlex},
          ]
        },
        {path: 'user-list', name: 'user-list', component: Empty,
          children: [
            {path: '/', name: 'user-list', component: UserList},
            {path: 'user-add', name: 'user-add', component: UserAdd},
            {path: 'user-edit/:id', name: 'user-edit', component: UserEdit}
          ]
        },
      ]
    },





  ]
})
