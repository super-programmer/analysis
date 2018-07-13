const mutations = {
  increment: state => {
    state.count = state.count + 5
  },
  decrement: state => {
    state.count = state.count - 3
  }
}

export default mutations
