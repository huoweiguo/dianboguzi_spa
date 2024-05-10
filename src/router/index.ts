import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/code",
    name: "code",
    component: () =>
      import(/* webpackChunkName: "code" */ "../views/CodeView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/NewsView.vue"),
  },
  {
    path: "/news/:id",
    name: "newsContext",
    component: () =>
      import(/* webpackChunkName: "newsContext" */ "../views/NewsContext.vue"),
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: () =>
      import(/* webpackChunkName: "contactUs" */ "../views/ContactUs.vue"),
  },
  {
    path: "/concept",
    name: "concept",
    component: () =>
      import(/* webpackChunkName: "concept" */ "../views/ConceptView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
