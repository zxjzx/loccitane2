<template>
  <div id="login">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    mounted: function () {
      this.$router.replace('/changepassword')
      // this.$router.push('changepassword')
    },
  }
</script>

<style scoped>
  body{
    margin:0;
    padding:0;
  }
</style>
