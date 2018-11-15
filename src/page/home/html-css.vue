<template>
  <div class="css-content">
    <div class="container">
      <div class="item-a">item-a</div>
      <div class="item-b">item-b</div>
      <div class="item-c">item-c</div>
      <div class="item-d">item-d</div>
      <div class="item-e">item-e</div>
    </div>

    <h2>高度过渡</h2>

    <div class="trigger">
      Hover me to see a height transition.
      <div class="el">content
        <p>著作权归作者所有。</p>
        <p>商业转载请联系作者获得授权,非商业转载请注明出处。</p>
        <p>链接:http://caibaojian.com/asyncawait.html</p>
        <p>来源:http://caibaojian.com</p>
        <p></p>
        <p>1. 简洁</p>
        <p>由示例可知，使用Async/Await明显节约了不少代码。</p>
        <p>我们不需要写.then，不需要写匿名函数处理Promise</p>
        <p>的resolve值，也不需要定义多余的data变量，还避免</p>
        <p>了嵌套代码。这些小的优点会迅速累计起来，这在之</p>
        <p>后的代码示例中会更加明显。</p>
        <p></p>
        <p>2. 错误处理
        <p>Async/Await让try/catch可以同时处理同步和异步错</p>
        <p>误。在下面的promise示例中，try/catch不能处理</p>
        <p>JSON.parse的错误，因为它在Promise中。我们需要</p>
        <p>使用.catch，这样错误处理代码非常冗余。并且，在我</p>
        <p>们的实际生产代码会更加复杂。</p>
      </div>
    </div>

    <h2>弹出式菜单</h2>
    <div class="reference">
      菜单栏啊
      <div class="popout-menu">
        Popout menu
        <div class="level3">3级别菜单</div>
      </div>
    </div>


    <h2>同级变淡</h2>

    <div class="sibling-fade">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
      <span>Item 6</span>
    </div>

    <h2>使用纯CSS创建三角形形状。</h2>
    <div class="triangle"></div>

    <h2>清除浮动</h2>

    原因：浮动元素排版超出了其父级元素（.topDiv），父元素的高度出现了塌缩，若没有文字高度的支撑，不考虑边框，父级元素高度会塌缩成零。

    <div class="clearfix">

      <div class="floated">float a</div>
      <div class="floated">float b</div>
      <div class="floated">float c</div>
      <div class="clearDiv">我的其他内容</div>
      <div>我的内呕吐</div>
    </div>

    <h2>等比高宽</h2>
    <div class="height-equal-width">
      内容是我，我是内容啊，哈哈哈

    </div>

    <h2>自定义滚动条</h2>
    <div class="custom-scrollbar">

      <p>
        ::-webkit-scrollbar 定位整个滚动条元素。<br>
        ::-webkit-scrollbar-track 仅针对滚动条轨道。<br>
        ::-webkit-scrollbar-thumb 瞄准滚动条拇指。<br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum
        vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
    </div>

    <p class="custom-variables">CSS is awesome!</p>

    <div class="content-rem">content-rem</div>

    <h2>CSS3 @keyframes 规则</h2>
    <div class="donut"></div>

  </div>
</template>

<script>
  export default {
    name: 'html-css'
  }
</script>

<style scoped>
  @import "html-css.less";
</style>
