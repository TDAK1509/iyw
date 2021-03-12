import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
  state: {
    count: 0
  },
  mutations: {
    ADD_ORDER(state, payload) {
      state.count++
      // let exitProduct = state.orders.filter(x => x._id === payload._id);
      // if (exitProduct) {
      //   exitProduct.number = exitProduct.number + payload.number;
      // } else {
      //   state.orders.push(payload);
      // }
      console.log(payload);
      localStorage.setItem("IYW_ORDER", state.count);
    },
    UPDATE_ORDER(state, payload) {
      state.orders.push(payload);
    },
    SET_ORDER(state, payload) {
      console.log(payload);
      state.count = payload;
      localStorage.setItem("IYW_ORDER", payload);
    }
  }
})

export default store;