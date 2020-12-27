import Vue from "vue";
import VueRouter from "vue-router";
import CSS from "../views/bases/CSS.vue";
import Forms from "../views/bases/Forms.vue";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import MapStore from "../views/state/MapStore.vue";
import StateMod from "../views/state/StateMod.vue";
import StateViewer from "../views/state/StateViewer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/css-page",
    name: "CSS",
    component: CSS,
  },
  {
    path: "/state-viewer",
    name: "StateViewer",
    component: StateViewer,
  },
  {
    path: "/StateMod",
    name: "StateMod",
    component: StateMod,
  },
  {
    path: "/MapStore",
    name: "MapStore",
    component: MapStore,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
