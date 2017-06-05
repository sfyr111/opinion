/**
 * history register module
 * author: yangran
 * 2017/5/18
 */
const types = {
  UPDATE_ITEM_POSITION: 'UPDATE_ITEM_POSITION',
  UPDATE_LOADING_STATUS: 'UPDATE_LOADING_STATUS',
  UPDATE_DIRECTION: 'UPDATE_DIRECTION'
}
const state = {
  itemScrollTop: 0,
  isLoading: false,
  direction: 'forward'
}

const getters = {
  getItemScrollTop: state => state.itemScrollTop,
  getIsLoading: state => state.isLoading,
  getDirection: state => state.direction
}

const mutations = {
  [types.UPDATE_ITEM_POSITION] (state, payload) {
    state.itemScrollTop = payload.top
  },
  [types.UPDATE_LOADING_STATUS] (state, payload) {
    state.isLoading = payload.isLoading
  },
  [types.UPDATE_DIRECTION] (state, payload) {
    state.direction = payload.direction
  }
}

const actions = {
  updateItemPosition ({ commit }, top) {
    commit({type: types.UPDATE_ITEM_POSITION, top})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
