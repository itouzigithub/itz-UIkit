// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 代码高亮
var hljs = require('highlight.js')
Vue.directive('hl', function(el) {
  hljs.highlightBlock(el);
})

require('../static/itz-ui.css');
window.f = require('../static/itz-ui.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
