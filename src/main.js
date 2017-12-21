import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

require('../static/itz-ui.css')
require('../static/foundation.css')
require('../static/itz-toast.js')

// 代码高亮
Vue.directive('hl', function(el) {
  hljs.highlightBlock(el);
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})