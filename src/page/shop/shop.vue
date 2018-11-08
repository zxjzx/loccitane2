<template>
  <div>
    <div v-for="item in newArr">
      <h1 v-if="item.level==0">{{item.name}}</h1>
      <h4 v-if="item.level>0">{{item.name}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shop',
    data () {
      return {
        opened: ['basic'],//默认展开
        level: 0,
        routes: [
          {
            name: 'home',
            path: '/home',
            meta: {text: '首页'}
          },
          {
            name: 'inner',
            path: '/inner',
            meta: {text: '内部平台'},
            children: [
              {
                name: 'oa',
                path: 'oa',
                meta: {text: 'OA'}
              },
              {
                name: 'jira',
                path: 'jira',
                meta: {text: 'Jira'}
              },
              {
                name: 'wiki',
                path: 'wiki',
                meta: {text: 'Wiki'}
              },
              {
                name: 'caiwu',
                path: 'caiwu',
                meta: {text: '财务'},
                children: [
                  {
                    name: 'chailv',
                    path: 'chailv',
                    meta: {text: '差旅'}
                  },
                  {
                    name: 'richang',
                    path: 'richang',
                    meta: {text: '日常'},
                    children: [
                      {
                        name: 'taxi',
                        path: 'taxi',
                        meta: {text: '交通'}
                      },
                      {
                        name: 'tel',
                        path: 'tel',
                        meta: {text: '通信'}
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'sec',
            path: '/sec',
            meta: {text: '审核'},
            children: [
              {
                name: 'acl',
                path: '/acl',
                meta: {text: 'ACL'}
              }
            ]
          }
        ],
        newArr: []
      }
    },
    methods: {
      elements (routes, level) {
        routes.map((route, index, arr) => {
          this.newArr.push({
            name: route.meta.text + '等级' + level,
            level: level
          })
          if (route.children && route.children.length) {
            level++
            this.elements(route.children, level)
          }
        })
      }
    },
    created () {
      console.log(this.routes)
      this.elements(this.routes, this.level)
    }
  }
</script>

<style scoped>

</style>
