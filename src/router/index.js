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
    children: [
      {
        path: "/home-filled",
        name: "home-filled",
        component: () => import("@/asass/home-filled.vue"),
      },
      {
        path: "/shopping-cart-full",
        name: "shopping-cart-full",
        component: () => import("@/asass/shopping-cart-full.vue"),
      },
      {
        path: "/menu",
        name: "menu",
        component: () => import("@/asass/menu.vue"),
      },
    ],
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
