import Vue from "vue";
import VueRouter from "vue-router";
import CSS from "../views/CSS.vue";
import Forms from "../views/Forms.vue";
import Home from "../views/Home.vue";
import StateMod from "../views/StateMod.vue";
import StateViewer from "../views/StateViewer.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
