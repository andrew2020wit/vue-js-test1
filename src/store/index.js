import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { someStateNumber: 100 },
  mutations: {
    incrementSomeStateNumber(state) {
      state.someStateNumber++;
    },
  },
  actions: {},
  modules: {},
});
