import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    current: false,
  },
  {
    path: "/one",
    name: "One",
    component: One,
    current: false,
  },
  {
    path: "/two",
    name: "Two",
    component: Two,
    current: false,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
