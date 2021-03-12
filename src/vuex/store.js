import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
  state: {
    orders: [],
  },
  mutations: {
    ADD_ORDER(state, payload) {
      let index = state.orders.findIndex(x => x._id === payload._id);
      if (index > -1) {
        state.orders[index].number = payload.number + state.orders[index].number;
      } else {
        state.orders.push(payload);
      }
      const orders = JSON.stringify(state.orders);
      localStorage.setItem("IYW_ORDER", orders);
    },
    SET_ORDER(state, payload) {
      state.orders = payload;
      const orders = JSON.stringify(state.orders);
      localStorage.setItem("IYW_ORDER", orders);
    }
  }
})

export default store;