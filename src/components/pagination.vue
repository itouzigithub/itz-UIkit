<template>
  <div class="g-holder">
    <section>
      <h3>分页</h3>
      <h4>目前主站分页采用第三方 jquery 插件，DOM 节点是自动生成的，因此只需引入 itz-ui.css 替换掉原来的样式并调整 js 配置即可</h4>
      <h4>此处仅供展示样式，没有交互</h4>
      <h4>规则：</h4>
      <h4>• 选中非第一页时，显示“上一页”</h4>
      <h4>• 选中第6页（包含第6页）以后的页码时，显示页码如图，具体规则：固定显示1、2页，选中页前后各显示两页</h4>
      <div class="pagination mb20">
        <span class="current prev" rel="prev">
          <span class="pagination-prev"><i class="icon-angle-left"></i>上一页</span>
        </span>
        <span class="current">1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <span>...</span>
        <a href="#" class="next" rel="next">
          <span class="pagination-next">下一页<i class="icon-angle-right"></i></span>
        </a>
        <span class="pagination-all">共200页</span>
        <span class="pagination-random-link">
          <span>到第</span>
          <input class="pagination-random-input" type="text">
          <span>页</span>
        </span>
        <a class="pagination-random-go">确定</a>
      </div>
      <div class="pagination">
        <a href="#" class="prev" rel="prev">
          <span class="pagination-prev"><i class="icon-angle-left"></i>上一页</span>
        </a>
        <a href="#">1</a>
        <a href="#">2</a>
        <span>...</span>
        <a href="#">4</a>
        <a href="#">5</a>
        <span class="current">6</span>
        <a href="#">7</a>
        <a href="#">8</a>
        <span>...</span>
        <a href="#" class="next" rel="next">
          <span class="pagination-next">下一页<i class="icon-angle-right"></i></span>
        </a>
        <span class="pagination-all">共200页</span>
        <span class="pagination-random-link">
          <span>到第</span>
          <input class="pagination-random-input" type="text">
          <span>页</span>
        </span>
        <a class="pagination-random-go">确定</a>
      </div>
      <pre><code class="js" v-hl>// 配置项调整参考
$('#pageContainer').pagination(totalPage, {
  num_display_entries: 5,
  first_show_always: false,
  last_show_always: false,
  prev_show_always: false,
  next_show_always: true,
  next_text: '&lt;span class="pagination-next"&gt;下一页&lt;i class="icon-angle-left">&lt;/i>&lt;/span&gt;',
  prev_text: '&lt;span class="pagination-prev"&gt;&lt;i class="icon-angle-left">&lt;/i>上一页&lt;/span&gt;'
});</code></pre>
    </section>
  </div>
</template>