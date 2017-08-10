<template>
  <div class="g-holder">
    <section>
      <h3>弹框</h3>
      <h4>弹框遮罩 z-index: 9</h4>
      <h4>上中下三行布局，尺寸均为固定值，中部内容自定义，超出高度时显示滚动条</h4>
      <!-- 因布局问题，弹框代码放在 index.html -->
      <div class="btn btn-sub" @click="show">普通弹框</div>
      <div class="btn btn-sub" @click="show('big')">大弹框</div>
      <pre><code class="html" v-hl>&lt;!-- 普通弹框 -->
&lt;div class="popbox" id="pop1">
  &lt;div class="popbox-mask">&lt;/div>
  &lt;div class="popbox-box">
    &lt;div class="popbox-hd">
      &lt;span>标题&lt;/span>
      &lt;i class="popbox-close-icon js-pop-close">&lt;/i>
    &lt;/div>
    &lt;div class="popbox-bd">&lt;/div>
    &lt;div class="popbox-ft">
      &lt;div class="btn btn-main" style="width: 120px; float: right">确定&lt;/div>
      &lt;div class="btn btn-sub js-pop-close" style="width: 120px; float: right; margin-right: 10px">取消&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/div>
&lt;!-- 大弹框 -->
&lt;div class="popbox" id="pop2">
  &lt;div class="popbox-mask">&lt;/div>
  &lt;div class="popbox-box popbox-lg">
    &lt;div class="popbox-hd">
      &lt;span>标题&lt;/span>
      &lt;i class="popbox-close-icon js-pop-close">&lt;/i>
    &lt;/div>
    &lt;div class="popbox-bd">&lt;/div>
    &lt;div class="popbox-ft">
      &lt;div class="btn btn-main" style="width: 120px; float: right">确定&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/div></code></pre>
    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      show (size) {
        if (size === 'big') {
          $('#pop2').fadeIn();
        } else {
          $('#pop1').fadeIn();
        }
      }
    }
  }
</script>