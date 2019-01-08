<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="hello"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div v-for="item in menuList">
          <el-submenu :index="item.name" v-if="item.children">
            <template slot="title">
              <i :class="item.meta&&item.meta?item.meta.icon:''"></i>
              <span>{{item.meta&&item.meta.title?item.meta.title:item.name}}</span>
            </template>
            <el-menu-item-group v-if="item.children" v-for="inItem in item.children">
              <el-menu-item :index="inItem.name"><i :class="inItem.meta&&inItem.meta?inItem.meta.icon:''"></i>{{inItem.meta&&inItem.meta.title?inItem.meta.title:inItem.name}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item v-else :index="item.name">
            <i :class="item.meta&&item.meta?item.meta.icon:''"></i>
            <span slot="title">{{item.meta&&item.meta.title?item.meta.title:item.name}}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import menu from '../config/menu-config'

  export default {
    data () {
      return {
        menu: menu
      }
    },
    created () {
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
      handleSelect (key) {
        this.$router.push({
          name: key
        })
      }
    },

  }
</script>

<style scoped>
</style>
