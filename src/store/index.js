import Vue from 'vue'
import Vuex from 'Vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutaions'
import paper from './modules/paper'

Vue.use(Vuex)

const state = {
  'access_token': ''
}
const modules = {
  paper
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  modules,
  mutations
})

export default store
