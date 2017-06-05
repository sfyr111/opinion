/**
 * router configure
 *
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component (resolve) {
        require(['@/views/search/Search'], resolve)
      }
    },
    {
      path: '/monitor',
      name: 'Monitor',
      component (resolve) {
        require(['@/views/monitor/Monitor'], resolve)
      }
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component (resolve) {
        require(['@/views/analysis/Analysis'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component (resolve) {
        require(['@/views/mine/Mine'], resolve)
      }
    }
  ]
})
