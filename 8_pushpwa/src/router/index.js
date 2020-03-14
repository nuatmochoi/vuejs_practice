import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/LoginPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/main",
      component: () => import("../views/MainPage.vue")
    },
    {
      path: "/",
      redirect: "/login"
    }
  ]
});
