import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Games from "../views/Games.vue";
import Scale from "../views/Scale.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Pous from "../views/Pous.vue";
import Rows from "../views/Rows.vue";
import Svgs from "../views/Svgs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: route => ({ name: route.query.name }),
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
    props: route => ({ fen: route.query.fen }),
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/scale",
    name: "Scale",
    component: Scale,
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
    path: "/pous",
    name: "Pous",
    component: Pous,
  },
  {
    path: "/rows",
    name: "Rows",
    component: Rows,
  },
  {
    path: "/svgs",
    name: "Svgs",
    component: Svgs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
