import Vue from "vue";
import VueRouter from "vue-router";
import CSS from "../views/CSS.vue";
import Forms from "../views/Forms.vue";
import Home from "../views/Home.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
