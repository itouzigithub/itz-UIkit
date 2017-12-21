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
      <pre><code class="html" v-hl>&lt;div class="btn btn-main">按钮主样式&lt;/div>
&lt;div class="btn btn-sub">按钮副样式&lt;/div>
&lt;div class="btn btn-main disabled">主按钮禁用&lt;/div>
&lt;div class="btn btn-sub disabled">副按钮禁用&lt;/div></code></pre>
    </section>

    <section>
      <h3>按钮大小</h3>
      <h4>宽度默认由内容决定。除默认大小外，提供三种可选尺寸：小中大，其它尺寸请自行定义</h4>
      <div>
        <div class="btn btn-main btn-lg">大按钮 large</div>
        <div class="btn btn-main btn-md ml30">中按钮 middle</div>
        <div class="btn btn-main btn-sm ml30">小按钮 small</div>
      </div>
      <pre><code class="html" v-hl>&lt;div class="btn btn-main btn-sm">小按钮&lt;/div>
&lt;div class="btn btn-main btn-md">中按钮&lt;/div>
&lt;div class="btn btn-main btn-lg">大按钮&lt;/div></code></pre>
    </section>

    <section>
      <h3>加载状态</h3>
      <h4>该加载图标只适合于白色、灰色的背景</h4>
      <h4>IE8 上做了降级处理，不显示加载图标</h4>
      <div>
        <div class="btn btn-sub">
          加载中
          <i class="btn-spinner icon-spinner"></i>
        </div>
        <div class="btn btn-sub btn-sm ml30">
          加载中
          <i class="btn-spinner icon-spinner"></i>
        </div>
      </div>
      <pre><code class="html" v-hl>&lt;div class="btn btn-sub">
  加载中&lt;i class="btn-spinner icon-spinner">&lt;/i>
&lt;/div>
&lt;div class="btn btn-sub btn-sm">
  加载中&lt;i class="btn-spinner icon-spinner">&lt;/i>
&lt;/div></code></pre>
    </section>
  </div>
</template>