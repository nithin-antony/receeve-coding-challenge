import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../pages/Dashboard.vue"),
  },
  {
    path: "/accounts",
    name: "accounts-details",
    component: () => import("../pages/Accounts.vue"),
  },
  {
    path: "/accounts/:id",
    name: "account-details",
    component: () => import("../pages/Account.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: () => import("../pages/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const loggedIn = localStorage.getItem("user");
  const authRequired = !publicPages.includes(to.path) && !loggedIn;

  if (authRequired) {
    return next("/login");
  }

  next();
});
export default router;
