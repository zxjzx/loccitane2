<template>
  <div>
    <h3>按钮居中显示</h3>
    <div style="display: flex;border:2px solid pink;width: 30%;">
      <div style="width:100px;height: 100px;background-color: green;flex-grow:1;">

      </div>
      <div style="align-self: center;flex-grow:2;">
        <el-button>我是按钮，按钮是我</el-button>
      </div>
    </div>

    <h3>flex:1 0 0 0什么意思</h3>
    <h3>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</h3>
    <div style="display: flex;width: 50%;height: 100px;background-color: #13ce66">
      <div class="flex-item"></div>
      <div class="flex-item"></div>
      <div class="flex-item"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'html-css-flex'
  }
</script>

<style scoped>

  .flex-item {
    border:1px solid darkgreen;
    margin: 0 10px;
    flex:1 1 auto;
    background-color: #55a532;
  }
</style>
