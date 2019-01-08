<template>
  <div>
    <!--<img src="./assets/logo.png">-->

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <navMenu></navMenu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'

  export default {
    name: 'container',
    components: {
      'navMenu': NavMenu
    },
    created(){
      console.log(this.$router.options);
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
    min-height: 700px;
    height: 900px;
    overflow-y: auto;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
