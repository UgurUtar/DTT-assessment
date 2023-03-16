import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import CreateView from "../views/CreateView.vue";
import EditView from "../views/EditView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home/detail/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/create-house",
      name: "create-house",
      component: CreateView,
    },
    {
      path: "/edit-house/:id",
      name: "edit-house",
      component: EditView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
