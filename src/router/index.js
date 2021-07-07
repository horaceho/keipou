import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Rows from "../views/Rows.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/one",
    name: "One",
    component: One,
  },
  {
    path: "/two",
    name: "Two",
    component: Two,
  },
  {
    path: "/rows",
    name: "Rows",
    component: Rows,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
