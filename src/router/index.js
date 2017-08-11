import Vue from 'vue'
import Router from 'vue-router'
import Instruction from '@/components/Instruction'

import icon from '@/components/common/icon'
import button from '@/components/pc/button'
import form from '@/components/pc/form'
import tab from '@/components/pc/tab'
import pagination from '@/components/pc/pagination'
import popbox from '@/components/pc/popbox'
import utility from '@/components/pc/utility'

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
      component: Instruction
    },
    {
      path: '/icon',
      component: icon
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
