import Vue from 'vue'
import Vuex from 'Vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutaions'
import Paper from './modules/paper'
import Class from './modules/class'
import Student from './modules/students'
import Answerdetail from './modules/answerdetail'

Vue.use(Vuex)

const state = {
  'access_token': 'ddd'
}
const modules = {
  Student,
  Paper,
  Class,
  Answerdetail
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  modules,
  mutations
})

export default store
