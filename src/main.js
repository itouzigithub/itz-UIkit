import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.$ = require('../static/vendor/jquery-2.1.4.min.js')

require('../static/itz-ui.css')
require('../static/foundation.css')
window.Toast = require('../static/itz-toast.js')

// 代码高亮
Vue.directive('hl', function(el) {
  hljs.highlightBlock(el);
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})