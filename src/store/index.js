import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import moduleA from "./second-store-module";

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
  modules: { moduleA: moduleA, auth: auth },
});
