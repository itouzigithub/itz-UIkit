// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

require('../static/itz-ui.css')
require('../static/utility/toast.js')

// 代码高亮
Vue.directive('hl', function(el) {
  hljs.highlightBlock(el);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
