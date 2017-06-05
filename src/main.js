import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import 'normalizecss/normalize.css'
import './modules/css/reset.scss'
import './modules/css/varables.scss'
import router from './router'
import App from './App'
import store from './store/store'
import Api from './api'
import './utils/history'
import vux from 'vux'
Vue.use(vux)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$http = Api
sync(store, router)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
