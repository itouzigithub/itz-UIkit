<template>
  <div class="app flex flex-col">
    <header>
      <span class="rel">
        ITOUZI-UIkit
        <span class="badge">1.0.1</span>
      </span>
    </header>
    
    <main class="flex flex-grow">
      <aside>
        <h2>Doc</h2>
        <ul>
          <router-link tag="li" to="/instruction">Instruction</router-link>
        </ul>
        <h2>Style</h2>
        <ul>
          <router-link tag="li" to="/icon">Icon</router-link>
          <router-link tag="li" to="/button">Button</router-link>
          <router-link tag="li" to="/form">Form</router-link>
          <router-link tag="li" to="/table">Table</router-link>
        </ul>
        <h2>Widget</h2>
        <ul>
          <router-link tag="li" to="/pagination">Pagination</router-link>
          <router-link tag="li" to="/tab">Tab</router-link>
          <router-link tag="li" to="/popbox">Popbox</router-link>
        </ul>
        <h2>Utility</h2>
        <ul>
          <router-link tag="li" to="/toolTip">ToolTip</router-link>
          <router-link tag="li" to="/toast">Toast</router-link>
        </ul>
        <h2>util</h2>
        <ul>
          <router-link tag="li" to="/util">util.js</router-link>
        </ul>
        <h2>Change Log</h2>
        <ul>
          <router-link tag="li" to="/1.x.x">1.x.x</router-link>
        </ul>
      </aside>

      <article>
        <router-view></router-view>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  mounted () {
    f()
  },
  watch: {
    $route () {
      setTimeout(f, 0)
    }
  }
}
</script>

<style>

/* ---------------------------------- App.vue style ---------------------------------- */
.app {
  height: 100%;
  overflow: hidden;
}
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #112378;
  background-color: #e33946;
  color: #fff;
  font-size: 20px;
  padding-left: 30px;
  flex-shrink: 0;
}
main {
  height: calc(100% - 50px);
}
aside {
  width: 220px;
  padding-left: 30px;
  padding-top: 20px;
  background-color: #efefef;
  position: relative;
  flex-shrink: 0;
}
aside ul {
  margin-bottom: 20px;
}
aside li {
  line-height: 28px;
  transition: all .2s;
  padding-left: 20px;
  cursor: pointer;
}
aside li:hover {
  color: #EE5555;
}
article {
  width: 100%;
  padding-top: 30px;
  padding-left: 100px;
  padding-bottom: 50px;
  overflow-y: auto;
}
h2 {
  font-size: 13px;
  font-weight: normal;
  color: #999;
  margin-bottom: 5px;
}
.rel {
  position: relative;
}
.badge {
  position: absolute;
  right: -40px; top: -5px;
  height: 15px;
  line-height: 15px;
  border-radius: 7px;
  padding: 0 7px;
  background-color: #f7ba2a;
  color: #fff;
  font-size: 9px;
}

/* ----------------------------------- Global style ----------------------------------- */
.router-link-active {
  color: #EE5555;
}
.g-holder {
  width: 800px;
}
section {
  margin-bottom: 60px;
}
h3 {
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 20px;
}
h4 {
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  color: #666;
  line-height: 1.7;
}
h5 {
  font-size: 14px;
  font-weight: normal;
  color: #666;
  line-height: 1.7;
}
.ml30 {
  margin-left: 30px;
}
.mb20 {
  margin-bottom: 20px;
}
pre {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #f7f7f7;
}
code {
  font-size: 13px;
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
  line-height: 1.7;
  background-color: transparent !important;
  padding: 0 !important;
}
.g-link {
  color: #ee5555;
}
.g-link:hover {
  text-decoration: underline;
}

mark {
  background-color: #f2f2f2;
  padding: 0 8px;
  font-size: 13px;
  font: inherit;
  color: inherit;
}

/* ----------------------------------------------------------------------------------- */
/* ----------------------------------- Basic Style ----------------------------------- */
/* ----------------------------------------------------------------------------------- */
body {
  color: #333;
}
/* ----------------------------------- 布局相关 ----------------------------------- */
.flex {
  display: -webkit-box;
  display: box;
  display: -webkit-flex;
  display: flex;
}
.flex-col {
  -webkit-box-orient: vertical;
          box-orient: vertical;
  -webkit-flex-direction: column;
          flex-direction: column;
}
.flex-grow {
  -webkit-box-flex: 1;
          box-flex: 1;
  -webkit-flex-grow: 1;
          flex-grow: 1;
}
/* 水平居中（flex 方向为水平） */
.center {
  -webkit-box-pack: center;
          box-pack: center;
  -webkit-justify-content: center;
          justify-content: center;
}
/* 垂直居中（flex 方向为水平） */
.middle {
  -webkit-box-align: center;
          box-align: center;
  -webkit-align-items: center;
          align-items: center;
}
/* 上下左右居中，元素须有宽高 */
.central {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
}

/*
 * Atom One Light by Daniel Gamage
 * Original One Light Syntax theme from https://github.com/atom/one-light-syntax
 */
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #383a42;
  background: #fafafa;
}
.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #a626a4;
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e45649;
}
.hljs-literal {
  color: #0184bb;
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #50a14f;
}
.hljs-built_in,
.hljs-class .hljs-title {
  color: #c18401;
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #986801;
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #4078f2;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
.hljs-link {
  text-decoration: underline;
}
</style>
