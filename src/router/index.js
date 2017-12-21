import Vue from 'vue'
import Router from 'vue-router'
import Instruction from '@/components/Instruction'

import icon from '@/components/icon'
import button from '@/components/button'
import form from '@/components/form'
import tab from '@/components/tab'
import table from '@/components/table'
import pagination from '@/components/pagination'
import popbox from '@/components/popbox'
import toolTip from '@/components/toolTip'
import utility from '@/components/utility'

import log1 from '@/log/1.x.x'

Vue.use(Router)

export default new Router({
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
      path: '/button',
      component: button
    },
    {
      path: '/form',
      component: form
    },
    {
      path: '/tab',
      component: tab
    },
    {
      path: '/table',
      component: table
    },
    {
      path: '/pagination',
      component: pagination
    },
    {
      path: '/popbox',
      component: popbox
    },
    {
      path: '/toolTip',
      component: toolTip
    },
    {
      path: '/utility',
      component: utility
    },
    // log
    {
      path: '/1.x.x',
      component: log1
    }
  ]
})
