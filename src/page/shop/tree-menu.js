// vue-router数据结构


// 菜单组件
const treeMenu = {
  props: {
    routes: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    elements (routes, r) {
      return routes
        .map(route => {
          if (!route.paths) route.paths = []
          if (route.children && route.children.length) {
            return r(
              'el-submenu',
              {
                props: {
                  index: route.name
                }
              },
              [
                r(
                  'span',
                  {
                    slot: 'title'
                  },
                  [
                    route.meta.text
                  ]
                ),
                this.elements(route.children, r)
              ]
            )
          } else if (route.path) {
            return r(
              'el-menu-item',
              {
                props: {
                  index: route.name
                }
              },
              [
                route.meta.text
              ]
            )
          } else {
            return null
          }
        })
        .filter(item => item)
    },
    onSelect (index) {
      console.log('>>>', index)
    }
  },
  render (r) {
    return r(
      'el-menu',
      {
        props: {
          backgroundColor: "#545c64",
          textColor: "#fff",
          activeTextColor: "#ffd04b"
        },
        on: {
          select: this.onSelect
        }
      },
      this.elements(this.routes, r)
    )
  }
}

export default {
  treeMenu:treeMenu
}

/*
// app
const app = new Vue({
  el: '#app',
  replace: false,
  components: {
    treeMenu
  },
  data: {
    routes
  }
})*/
