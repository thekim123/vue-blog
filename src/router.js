import { createWebHistory, createRouter } from "vue-router";
import DiaryView from './components/DiaryView.vue'
import HomeView from './components/HomeView.vue'
import DetailView from './components/DetailView.vue'
import CommentView from './components/CommentView.vue'
import AuthorView from './components/AuthorView.vue'


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
    children: [
      {
        path: "author",
        component: AuthorView,
      },
      {
        path: "comment",
        component: CommentView,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 