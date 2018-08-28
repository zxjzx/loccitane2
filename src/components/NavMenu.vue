<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
               unique-opened
               router
               :default-openeds="opened"
               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">


        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
          <template slot="title">
            <i :class="item.icon"></i><span v-text="item.name"></span>
          </template>
          <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName" >

            <el-menu-item :index="sub.componentName">
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
  export default {
    data () {
      return {
        opened:["basic"],//默认展开
        menu: menu
      }
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

        this.$router.push(key)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>
