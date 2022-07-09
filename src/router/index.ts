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
    component: () => import("../components/AccountsDetails.vue"),
  },
  {
    path: "/accounts/:id",
    name: "claims-details",
    component: () => import("../pages/Claim.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
