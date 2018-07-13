import http from '@/http'
export default {
  namespaced: true,
  state: {
    data: {
      dd: '111'
    }
  },
  getters: {
    state (state) {
      return state
    }
  },
  mutations: {
    GETORIN (state, data) {
      state.data = data
    }
  },
  actions: {
    init (data) {
      let option = data
      http.axiosRequest(option).then((res) => {

      })
    }
  }
}
