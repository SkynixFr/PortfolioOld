import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import("@/views/CV.vue")
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("@/views/Project.vue")
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
