<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
               :unique-opened="false"
               router
               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu v-for="item in menuList" :index="resolvePath(item.path)" :key="item.name">
          <template slot="title">
            <i :class="item.icon"></i><span v-text="item.name"></span>
          </template>
          <el-menu-item-group class="over-hide" v-for="sub in item.children" :key="sub.name" >
            <el-menu-item :index="resolvePath(sub.path)" @click="resolvePath(sub)">
              <i :class="sub.icon"></i>{{sub.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import menu from '../config/menu-config'
  import path from 'path'
  export default {
    data () {
      return {
        // opened:["basic"],//默认展开
        menu: menu
      }
    },
    created(){
      // console.log(this.$router.options);
      // console.log(this.$router)
      // console.log(this.$router.options)
      // console.log(this.$router.options.routes)
      // name
      this.$router.options.routes.map(item => {
        if (item.name == 'container') {
          this.menuList = item.children
        }
      })
      console.log(this.menuList)
    },

    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect (key, keyPath){
        console.log(key);
        console.log(keyPath);
        // this.$router.push(key)
      },
      resolvePath(routePath){
        console.log("routePath:")
        console.log(routePath)
        console.log(routePath.path)
        return routePath
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>
