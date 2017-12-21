<template>
  <div class="g-holder">
    <section>
      <h3>组件分类</h3>
      <h4>• style 类：只有样式，没有内部逻辑，仅由 HTML + CSS 实现，如按钮</h4>
      <h4>• widget 类：既有样式，也有内部逻辑，由 HTML + CSS + js 实现，如分页</h4>
      <h4>• utility 类：特殊的 widget，由纯 js 实现，如 toast 和 tip</h4>
      <h4>思路：是否为纯样式组件？如否，用纯 js 实现是否合理？如否，则为 widget</h4>
    </section>

    <section>
      <h3>如何使用</h3>
      <pre><code>// 引用目录
itouzi
  | - fis-sourceFile
            | - public
                  | - component
                          | - static
// 示例
/component/static/itz-ui.css
</code></pre>
    </section>

    <section>
      <h3>组件概览</h3>
      <h4>itz-ui.js 依赖 jQuery</h4>
      <h4>utility 中的组件，如果文件名含 "jquery"，则依赖 jQuery，不含，则不依赖</h4>
      <h4>• <mark>foundation.css</mark> PC 端通用 CSS 基础库</h4>
      <h4>• <mark>itz-ui.css</mark> 组件样式库</h4>
      <h4>• <mark>itz-ui.js</mark> widget 组件功能库</h4>
      <h4>utility 组件，仅依赖相应 js 文件，不依赖 CSS</h4>
      <h4>• <mark>itz-toast.js</mark></h4>
    </section>

    <section>
      <h3>样式与逻辑分离</h3>
      <h4>widget 原件由样式和逻辑组成，由于采用 jQuery，选择器既会用于设置样式，又会用于 js 调用，从而形成一种糟糕的耦合关系。出于解耦的考虑，所有供 js 调用的 class 类名均以 js- 为前缀，并且仅供 js 调用，不得用于设置样式。这样做的好处是，样式可以自由定义，完全不影响组件内部的逻辑</h4>
      <pre><code class="html" v-hl>&lt;div class="js-widget widget-style">&lt;/div>
&lt;div class="js-widget widget-another-style">&lt;/div></code></pre>
    </section>

    <section>
      <h3>优雅降级</h3>
      <h4>由于 IE8 属于逐步放弃支持的浏览器，当遇到 IE8 不支持的、常规兼容手段成本较大的情况，通常采用以下处理方式</h4>
      <pre><code>display: none\9;</code></pre>
    </section>

    <section>
      <h3>开发注意</h3>
      <h4>main.js 中，itz-ui.js 被注册为一个全局函数 f，每次路由切换，都会执行 f（参见 App.vue），原因是随着路由切换，DOM 节点会不断销毁与重建，必须重新执行 f 才能使 jQuery 组件生效</h4>
      <h4>尽管如此，由于热更新，组件 DOM 更新了，但是相应的 js 却没有重新加载，也会导致组件失效。解决办法是刷新页面</h4>
    </section>
  </div>
</template>
