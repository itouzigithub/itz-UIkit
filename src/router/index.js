import Vue from 'vue'
import Router from 'vue-router'
import Instruction from '@/components/Instruction'

import icon from '@/components/icon'
import button from '@/components/button'
import form from '@/components/form'
import table from '@/components/table'

import tab from '@/components/tab'
import pagination from '@/components/pagination'
import popbox from '@/components/popbox'

import toolTip from '@/components/toolTip'
import toast from '@/components/util-toast'

import util from '@/components/util'

import log1 from '@/log/1.x.x'

Vue.use(Router)

const router = new Router({
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
      path: '/table',
      component: table
    },
    // widget
    {
      path: '/tab',
      component: tab
    },
    {
      path: '/pagination',
      component: pagination
    },
    {
      path: '/popbox',
      component: popbox
    },
    // utility
    {
      path: '/toolTip',
      component: toolTip
    },
    {
      path: '/toast',
      component: toast
    },
    // util
    {
      path: '/util',
      component: util
    },
    // log
    {
      path: '/1.x.x',
      component: log1
    }
  ]
})

router.beforeEach((to, from, next) => {
  next();
  setTimeout(function () {
    document.querySelector('article').scrollTop = 0;
  }, 0)
})

export default router