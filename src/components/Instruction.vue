<template>
  <div class="g-holder">  
    <section>
      <h3>基础组件层的构成</h3>
      <h4>• 底层方法库：<mark>jQuery</mark></h4>
      <h4>• 通用方法库：<mark>util.js</mark></h4>
      <h4>• 底层样式库：<mark>foundation.css</mark></h4>
      <h4>• 通用组件库：<mark>itz-ui.css</mark>、<mark>itz-ui.js</mark>、<mark>utility</mark></h4>
    </section>

    <section>
      <h3>通用组件分类</h3>
      <h4>• style 类：只有样式，没有内部逻辑，仅由 HTML + CSS 实现，如按钮</h4>
      <h4>• widget 类：既有样式，也有内部逻辑，由 HTML + CSS + js 实现，如分页</h4>
      <h4>• utility 类：特殊的 widget，由纯 js 实现，如 toast 和 tip</h4>
      <pre><code>组件 = 是否为纯样式组件
      ? style
      : 用纯 js 实现是否合理
        ? utility
        : widget</code></pre>
    </section>

    <section>
      <h3>如何使用</h3>
      <h4>一次性全部引入：util.js、foundation.css、itz-ui.css、itz-ui.js</h4>
      <h4>总大小控制在 30k 以内（压缩后的文件大小，不是 Gzip 大小）</h4>
      <h4>控制变动，充分利用缓存</h4>
      <h4>foundation.css、util.js 和 utility 组件可以单独引入、单独使用</h4>
      <pre><code>// 引用目录
itouzi
   |- fis-sourceFile
        |- public
             |- component
                   |- static
// 示例
&lt;link type="stylesheet" href="/component/static/itz-ui.css">
</code></pre>
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
      <h3>模块化方案</h3>
      <h4>模块定义</h4>

<pre><code v-hl>(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else {
    var ret = factory()
    if (global.itz) {
      itz.$ = itz.$ || {};
      itz.$.Toast = ret
    }
    return ret
  }
})(window, function () {
  var _privateProperty = '';
  var _privateFunc = function () {};

  return function () {}
})</code></pre>

      <h4 class="mt20">模块引用</h4>
<pre><code v-hl>// 如果直接用 script 引入 js 文件，则*必须*事先定义 itz 全局变量
// 来自组件库的方法统一定义在 itz.$ 命名空间下
&lt;script>window.itz = {};&lt;/script>
&lt;script src="/Toast.js">&lt;/script>
&lt;script>
  itz.$.Toast('操作成功');
&lt;/script>

// 采用 fis3 编译的项目，如果使用 __inline 方式引用，分两种情况
// 直接引用，则与 script 标签引用的方式一样，需要事先定义 itz 全局变量
__inline('/public/component/static/Toast.js')

// 模块化引用（推荐），不依赖 itz 全局变量
var toast = __inline('/public/component/static/Toast.js')

// CommonJS
// 本文档在 node 环境下构建，因此用 require
var toast = require('../Toast.js')</code></pre>
    </section>

    <section>
      <h3>组件开发要点</h3>
      <h4>组件命名请三思</h4>
      <h4>奥卡姆剃刀原则：如无必要，勿增实体。能少配置就少配置，能不配置就不配置。约定大于配置</h4>
      <h4>功能型组件区分简单的情况和复杂的情况，勿套用统一的模式</h4>
      <h4 class="pl25">简单的情况：只要加上 class 名或相关属性即可获得相应功能</h4>
      <h4 class="pl25">复杂的情况：需要 new 一个对象并配置参数</h4>
      <h4>组件更新后，需更新文档，包括 change log，并上传到 githubpage</h4>
      <h4>static 中的文件不需要压缩，由 fis3 来的处理</h4>
    </section>

    <section>
      <h3>文档开发须知</h3>
      <h4>main.js 中，itz-ui.js 被注册为一个全局函数 f，每次路由切换，都会执行 f（参见 App.vue），原因是随着路由切换，DOM 节点会不断销毁与重建，必须重新执行 f 才能使 jQuery 组件生效</h4>
      <h4>尽管如此，由于热更新，组件 DOM 更新了，但是相应的 js 却没有重新加载，也会导致组件失效。解决办法是刷新页面</h4>
      <h4>打包上传时注意将 index.html 文件中引入的静态资源路径做修改</h4>
    </section>
  </div>
</template>
