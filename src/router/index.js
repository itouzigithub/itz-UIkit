import Vue from 'vue'
import Router from 'vue-router'
import Usage from '@/components/Usage'

import button from '@/components/pc/button'
import form from '@/components/pc/form'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/usage'
    },
    {
      path: '/usage',
      name: 'Usage',
      component: Usage
    },
    {
      path: '/pc/button',
      component: button
    },
    {
      path: '/pc/form',
      component: form
    }
  ]
})
