import Vue from 'vue'
import Vuex from 'vuex'
import keyWords from './modules/keyWords'
import registerModule from './modules/registerModule'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    keyWords,
    registerModule
  }
})
