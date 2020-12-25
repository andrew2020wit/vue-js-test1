import axios from "axios";
import "es6-promise/auto";
import Vue from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);
export const apiUrl = "http://localhost:3001/api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
