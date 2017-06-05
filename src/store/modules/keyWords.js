import Api from '../../api'
import * as types from '../mutation-types.js'

const state = {
  keyWordsList: []
}

const getters = {
  getKeyWordsList: state => state.keyWordsList
}

const actions = {
  keyWordsList ({ commit }, params) {
    Api.keyWordsList(params).then(data => {
      commit(types.KEYWORDS_LIST, data.resp.list)
    })
  }
}

const mutations = {
  [types.KEYWORDS_LIST]: (state, data) => {
    state.keyWordsList = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
