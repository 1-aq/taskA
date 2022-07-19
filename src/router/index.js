import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home";
import Login from "@/views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
