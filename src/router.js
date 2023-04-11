import { createWebHistory, createRouter } from "vue-router";
import DiaryView from './components/DiaryView.vue'
import HomeView from './components/HomeView.vue'
import DetailView from './components/DetailView.vue'

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/list",
    component: DiaryView,
  },
  {
    path: "/detail/:id",
    component: DetailView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 