<template>
  <div class="g-holder">
    <section>
      <h3>标签页</h3>
      <h4>标签部分和内容部分的最外层节点必须是相邻节点</h4>
      <h4>各类标签 html 结构均一致，样式由一个类名控制，常规型：itz-tab-normal，方格型：itz-tab-square，线型：itz-tab-line</h4>
    </section>
    <section>
      <h3>常规标签页</h3>
      <ul class="js-tab itz-tab-normal">
        <li class="itz-tab-item itz-tab-active">标签一</li>
        <li class="itz-tab-item">标签二</li>
        <li class="itz-tab-item">标签三</li>
      </ul>
      <div>
        <div class="itz-tab-content">内容一</div>
        <div class="itz-tab-content">内容二</div>
        <div class="itz-tab-content">内容三</div>
      </div>
      <pre><code class="html" v-hl>&lt;ul class="js-tab itz-tab-normal">
  &lt;li class="itz-tab-item itz-tab-active">标签一&lt;/li>
  &lt;li class="itz-tab-item">标签二&lt;/li>
  &lt;li class="itz-tab-item">标签三&lt;/li>
&lt;/ul>
&lt;div>
  &lt;div class="itz-tab-content">内容一&lt;/div>
  &lt;div class="itz-tab-content">内容二&lt;/div>
  &lt;div class="itz-tab-content">内容三&lt;/div>
&lt;/div></code></pre>
    </section>

    <section>
      <h3>方格型标签页</h3>
      <h4>将上述代码中 itz-tab-normal 换成 itz-tab-square 即可</h4>
      <ul class="js-tab itz-tab-square">
        <li class="itz-tab-item itz-tab-active">标签一</li>
        <li class="itz-tab-item">标签二</li>
        <li class="itz-tab-item">标签三</li>
      </ul>
      <div>
        <div class="itz-tab-content">内容一</div>
        <div class="itz-tab-content">内容二</div>
        <div class="itz-tab-content">内容三</div>
      </div>
    </section>

    <section>
      <h3>线型标签页</h3>
      <h4>将上述代码中 itz-tab-normal 换成 itz-tab-line 即可</h4>
      <ul class="js-tab itz-tab-line">
        <li class="itz-tab-item itz-tab-active">标签一</li>
        <li class="itz-tab-item">标签二</li>
        <li class="itz-tab-item">标签三</li>
      </ul>
      <div>
        <div class="itz-tab-content">内容一</div>
        <div class="itz-tab-content">内容二</div>
        <div class="itz-tab-content">内容三</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
	ul {
		margin-bottom: 10px;
	}
</style>