<template>
  <div class="g-holder">
    <section>
      <h3>输入框</h3>
      <h4>输入框尺寸具有高度不确定性，因此请自行按需设置。预设宽度300px，预设高度40px</h4>
      <div>
        <input class="ipt" type="text" placeholder="提示信息">
        <input class="ipt ml30" type="text" placeholder="禁用样式" disabled>
      </div>

      <pre><code class="html" v-hl>&lt;input type="text" class="ipt" placeholder="提示信息">
&lt;input type="text" class="ipt" placeholder="禁用样式" disabled></code></pre>
    </section>

    <section>
      <h3>输入框单元</h3>
      <h4>单元格可用于放置文字单位或清除图标，清除图标功能需引入 itz-ui.js</h4>
      <h4>清除图标的显示与隐藏由 CSS 实现，严重依赖 HTML 结构，请保持 span 与 input 节点的相邻关系，并且 ipt-wrap 中不可放置其它节点</h4>
      <div class="ipt-wrap mb20">
        <input class="ipt" type="text" placeholder="提示信息">
        <span class="ipt-cell cell"></span>
      </div>
      <br>
      <div class="ipt-wrap">
        <input class="ipt" type="text" placeholder="文字单位">
        <span class="ipt-cell">万元</span>
      </div>
      <div class="ipt-wrap ml30 js-ipt-clear">
        <input class="ipt" type="text" placeholder="清除按钮，获取焦点时显示">
        <span class="ipt-cell">
          <i class="ipt-clear"></i>
        </span>
      </div>
      <pre><code class="html" v-hl>&lt;div class="ipt-wrap">
  &lt;input class="ipt" type="text" placeholder="文字单位">
  &lt;span class="ipt-cell">万元&lt;/span>
&lt;/div>
&lt;div class="ipt-wrap js-ipt-clear">
  &lt;input class="ipt" type="text" placeholder="清除按钮">
  &lt;span class="ipt-cell">
    &lt;i class="ipt-clear">&lt;/i>
  &lt;/span>
&lt;/div></code></pre>
    </section>

    <section>
      <h3>输入框后置按钮</h3>
      <div class="ipt-container">
        <div class="ipt-wrap">
          <input class="ipt" type="text" placeholder="文字单位">
          <span class="ipt-cell">万元</span>
        </div>
        <div class="btn btn-main">按钮</div>
      </div>
      <pre><code class="html" v-hl>&lt;div class="ipt-container">
  &lt;div class="ipt-wrap">
    &lt;input class="ipt" type="text" placeholder="文字单位">
    &lt;span class="ipt-cell">万元&lt;/span>
  &lt;/div>
  &lt;div class="btn btn-main">按钮&lt;/div>
&lt;/div></code></pre>
    </section>

    <section>
      <h3>输入域</h3>
      <h4>默认宽度 100%</h4>
      <textarea class="txt" placeholder="请输入" rows="3"></textarea>
      <pre><code class="html" v-hl>&lt;textarea class="txt" placeholder="请输入" rows="3">&lt;/textarea></code></pre>
    </section>

    <section>
      <h3>输入域字数限制</h3>
      <div class="txt-wrap js-maxlength">
        <textarea class="txt" placeholder="请输入" rows="3" maxlength="140"></textarea>
      </div>
      <pre><code class="html" v-hl>&lt;div class="txt-wrap js-maxlength">
  &lt;textarea placeholder="请输入" rows="3" maxlength="140">&lt;/textarea>
&lt;/div></code></pre>
    </section>
  </div>
</template>

<style scoped>
  .cell {
    background-color: #f2f2f2;
  }
</style>