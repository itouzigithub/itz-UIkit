<template>
  <div class="g-holder">
    <section>
      <h3>按钮样式</h3>
      <div>
        <div class="btn btn-main">按钮主样式</div>
        <div class="btn btn-sub ml30">按钮副样式</div>
        <div class="btn btn-main ml30 disabled">主按钮禁用</div>
        <div class="btn btn-sub ml30 disabled">副按钮禁用</div>
      </div>
      <pre><code class="html" v-hl>&lt;div class="btn btn-main"&gt;按钮主样式&lt;/div&gt;
&lt;div class="btn btn-sub"&gt;按钮副样式&lt;/div&gt;
&lt;div class="btn btn-main disabled"&gt;主按钮禁用&lt;/div&gt;
&lt;div class="btn btn-sub disabled"&gt;副按钮禁用&lt;/div&gt;</code></pre>
    </section>

    <section>
      <h3>按钮大小</h3>
      <h4>除默认大小外，仅提供两种尺寸：小与大，其它尺寸请自行定义</h4>
      <div>
        <div class="btn btn-main btn-lg">大按钮</div>
        <div class="btn btn-main ml30">默认大小</div>
        <div class="btn btn-main btn-sm ml30">小按钮</div>
      </div>
      <pre><code class="html" v-hl>&lt;div class="btn btn-main btn-sm"&gt;小按钮&lt;/div&gt;
&lt;div class="btn btn-main"&gt;默认大小&lt;/div&gt;
&lt;div class="btn btn-main btn-lg"&gt;大按钮&lt;/div&gt;</code></pre>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>