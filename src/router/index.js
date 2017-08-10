import Vue from 'vue'
import Router from 'vue-router'
import Instruction from '@/components/Instruction'

import button from '@/components/pc/button'
import form from '@/components/pc/form'
import tab from '@/components/pc/tab'
import pagination from '@/components/pc/pagination'
import popbox from '@/components/pc/popbox'

import utility from '@/components/pc/utility.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/instruction'
    },
    {
      path: '/instruction',
      name: 'Instruction',
      component: Instruction
    },
    {
      path: '/pc/button',
      component: button
    },
    {
      path: '/pc/form',
      component: form
    },
    {
      path: '/pc/tab',
      component: tab
    },
    {
      path: '/pc/pagination',
      component: pagination
    },
    {
      path: '/pc/popbox',
      component: popbox
    },
    {
      path: '/pc/utility',
      component: utility
    }
  ]
})
