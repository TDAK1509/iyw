import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
  state() {
    return {
      orders: []
    }
  },
  mutations: {
    increment(state) {
      state.orders = []
    }
  }
})

export default store;