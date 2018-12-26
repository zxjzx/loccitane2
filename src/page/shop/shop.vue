<template>
  <div>
    <span class="font-color">回调的作用</span>
    <div v-for="item in newArr">
      <h1 v-if="item.level==0">{{item.meta.text}} - 等级 {{item.level}}</h1>
      <h4 v-if="item.level>0">{{item.meta.text}} - 等级 {{item.level}}</h4>
    </div>

    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
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
        newArr: [],
        markers: [{position: {lat: 22.320871165992852, lng: 114.17420427218235}}],//红点位置

      }
    },
    methods: {
      elements (routes, level) {
        routes.map((route, index, arr) => {

          route.level = level
          this.newArr.push(route)
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

<style  lang="scss">
  @import '../../assets/scss/common.scss';
  .font-color {
    color: $main;
  }
</style>
