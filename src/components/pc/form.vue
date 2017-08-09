<template>
  <div class="g-holder">
    <section>
      <h3>输入框基础样式</h3>
      <h4>宽度默认为 100%</h4>
      <div class="flex">
        <div class="w300">
          <div class="ipt">
            <input type="text" placeholder="提示信息">
          </div>
        </div>
        <div class="w300 ml30">
          <div class="ipt disabled">
            <input type="text" placeholder="禁用样式">
          </div>
        </div>
      </div>

      <pre><code class="html" v-hl>&lt;div class="ipt"&gt;
  &lt;input type="text" placeholder="提示信息"&gt;
&lt;/div&gt;
&lt;div class="ipt disabled"&gt;
  &lt;input type="text" placeholder="禁用样式"&gt;
&lt;/div&gt;</code></pre>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .w300 {
    width: 300px;
  }
</style>