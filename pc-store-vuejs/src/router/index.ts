import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import shop from "../views/Shop.vue";
import show_product from "../views/ShowProduct.vue";
import userControl from "../views/UserControl.vue";
import about from "../views/AboutView.vue";
import Cookies from 'js-cookie'

import auth from "../middleware/auth.js";
import log from "../middleware/log.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "shop",
    component: shop,
  },
  {
    path: "/show_product/:slug",
    name: "show_product",
    component: show_product,
  },
  {
    path: "/myAccount",
    name: "userControl",
    component: userControl,
    beforeEnter: (to, from, next) => {
      if (!Cookies.get('token')) {
        next('/');
        console.log('sdgasdgsdfg sfdasfh sfa h')
      }
      next()
    },
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
