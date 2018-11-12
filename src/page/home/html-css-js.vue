<template>
  <div>

    <h2>:非选择器</h2>
    <div style="display: block">
      <ul class="css-not-selector-shortcut">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </div>

    <h2>重置样式</h2>
    <div class="reset-all-styles">
      <h4 class="h4-style">Title</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum
        vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
    </div>


    <div class="clearfix">
      <div id="container" class="box-content" ref="container" @mousemove="mouseMove" @click="clickMe">
        totalNum:{{totalNum}}<br>
        offsetX:{{offsetX}}<br/>
        offsetY:{{offsetY}}
        <div class="cursor-pos" ref="cursorPos"></div>
      </div>
    </div>


    <h2>动画效果咯</h2>

    <div class="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
      五味子
    </div>


    <h2>盒尺寸重置</h2>
    <div class="box-init">盒子</div>

    <h2>悬停下划线动画</h2>
    <p class="hover-underline-animation">Hover this text to see the effect!</p>

    <h2>鼠标经过盒子变换样式</h2>
    <div class="hover-btn"></div>
  </div>
</template>

<script>
  export default {
    name: 'html-css-js',
    data () {
      return {
        offsetX: 0,
        offsetY: 0,
      }
    },
    mounted () {
      // this.clickMe();
    },
    computed: {
      totalNum () {
        let total = this.offsetX + this.offsetY
        return total
      }
    },
    methods: {
      clickMe (e) {
        console.log(e)
      },
      mouseMove (e) {
        if (e.offsetX == 0) {
          console.log(e)
          console.error(e.offsetX)
        }
        this.offsetX = e.offsetX
        this.offsetY = e.offsetY
        this.$refs.cursorPos.style.setProperty('--x', e.offsetX + 'px')
        this.$refs.cursorPos.style.setProperty('--y', e.offsetY + 'px')

      },
    }
  }
</script>

<style scoped>
  :root {
    --x: 0px;
    --y: 0px;

  }

  .clearfix:after {
    　　　　　　content: "";
    　　　　　　height: 0;
    　　　　　　line-height: 0;
    　　　　　　display: block;
    　　　　　　visibility: hidden;
    　　　　　　clear: both;
  }

  .box-content {
    /*width: 200px;*/
    height: 200px;
    background-color: #5daf34;
    position: relative;
    display: block;
  }

  .cursor-pos {
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    left: var(--x);
    top: var(--y);
    transition: left 0.5s ease, top 0.5s ease;
  }

  .css-not-selector-shortcut {

  }

  .css-not-selector-shortcut li {
    list-style: none;
    float: left;
    padding: 0 20px;
    /*border-right: 2px solid red;*/
  }

  /*.css-not-selector-shortcut li:last-child{
    border-right: none;
  }*/
  .css-not-selector-shortcut li:not(:last-child) {
    border-right: 2px solid red;
  }

  .h4-style {
    color: red;
  }

  .reset-all-styles {
    all: initial;
  }

  .bouncing-loader{

    display: flex;
    justify-content: center;
  }
  .bouncing-loader>div{
    position: relative;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    margin:0rem 1rem;
    background-color: #8385aa;
    animation: my-circle 1.5s infinite;
  }

  @keyframes my-circle {
    0%{transform: translateY(0);opacity: 1}
    50%{transform: translateY(2rem);opacity: 0.1}
    100%{transform: translateY(0);opacity: 1}
  }
  .bouncing-loader>div:nth-child(2){
    animation-delay: 0.5s;
  }
  .bouncing-loader>div:nth-child(3){
    animation-delay: 1s;
  }

  .box-init{
    display: inline-block;
    width: 60px;
    height: 60px;
    border:3px solid pink;
    background-color: #5daf34;
    padding:2px;
    margin:3px;
  }
  .box-init{
    box-sizing: border-box;
  }
  .box-init:before,.box-init:after{
    box-sizing: inherit;
    content: '---';
  }

  .hover-underline-animation{
    display: inline-block;
    position: relative;
    color:red;
  }

  .hover-underline-animation:after{
    content: '';
    width: 100%;
    height: 2px;
    background-color: deeppink;
    position: absolute;
    left:0;
    bottom:0;
    transform: scaleX(0);
    transition: transform 0.4s ease-out;
    transform-origin: right bottom;

  }
  .hover-underline-animation:hover:after{
    transform: scaleX(1);
    transform-origin: left bottom;
  }
/*
  .hover-btn{
    width: 100px;
    height: 100px;
    background-color: #5daf34;
    display: inline-block;
    transition: width 2s,height 3s;
  }
  .hover-btn:hover{
    width: 500px;
    height: 500px;
  }*/

  .hover-btn{
    width: 100px;
    height: 100px;
    background-color: #5daf34;
    display: inline-block;
    position: relative;
  }
  .hover-btn:hover{
    animation: mychange 2s ease-out infinite;
  }
  @keyframes mychange {
    0%{width: 100px;height: 100px;}
    50%{width: 200px;height: 200px;}
    100%{width: 100px;height: 100px;}
  }


</style>
