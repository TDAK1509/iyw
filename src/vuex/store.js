import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
  state() {
    return {
      orders: [],
      prducts: []
    }
  },
  mutations: {
    ADD_ORDER(state, payload) {

      state.orders.push(payload);
    },
    SET_PRODUCT(state, payload) {
      state.prducts = payload;
    }
  }
})

export default store;