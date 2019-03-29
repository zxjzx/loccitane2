<template>
  <div>
    <div style="width: 200px;height:40px;background-color: #3DD693;margin:10px;" :style="{'background-color':color}"
         @contextmenu.prevent="$refs.ctxMenu.open($event,{color: color, index: index})"
         v-for="(color, index) in colors">
      点击我打开右键颜色：{{color}}
    </div>

    <ctxmenu id="context-menu" ref="ctxMenu" @ctx-open="onCtxOpen" @ctx-cancel="resetCtxLocals"
                  @ctx-close="onCtxClose" class="right-menu">
      <li @click="chooseItem(menuData)">option {{menuData.color}}</li>
      <li>option 2</li>
      <li>option 3</li>
    </ctxmenu>
  </div>

</template>

<script>
  import ctxmenu from './ctx-menu'

  const newMenuData = () => ({color: null});
  export default {
    name: "test",
    components: {ctxmenu
    },
    data() {
      return {
        colors: ['pink', 'lightblue', 'green', 'red', 'turquoise'],
        menuData: newMenuData(),
      }
    },
    methods: {
      chooseItem(item){
        console.log(item);
      },

      onCtxOpen(locals) {
        console.log('open', locals)
        this.menuData = locals
      },
      onCtxClose(locals) {
        console.log('close', locals)
      },
      resetCtxLocals() {
        this.menuData = newMenuData()
      },
    }
  }
</script>

<style scoped lang="scss">

  .right-menu {
    border: 1px solid #eee;
    box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, .1);
    border-radius: 1px;
  }

  .right-menu li {
    width: 100%;
    padding: 5px 0;
    height: 28px;
    line-height: 28px;
    text-align: center;
    display: block;
    color: #606266;
    list-style: none;
  }

  .right-menu li:hover {
    background: red;
    color: #ffffff;
  }
</style>
