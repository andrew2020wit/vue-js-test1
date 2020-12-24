import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { someStateNumber: 100 },
  getters: {
    some1000StateNumber: (state) => {
      return state.someStateNumber * 1000;
    },
  },
  mutations: {
    incrementSomeStateNumber(state) {
      state.someStateNumber++;
    },
  },
  actions: {
    someAction(context) {
      setTimeout(() => context.commit("incrementSomeStateNumber"), 2000);
    },
  },
  modules: {},
});
