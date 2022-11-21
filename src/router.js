import { createWebHistory, createRouter } from "vue-router";
import List from './components/ListApp.vue';
import Home from './components/HomeOne.vue';
import Detail from './components/DetailView.vue';
import Author from './components/detail/AuthorView.vue';
import Comment from './components/detail/CommentView.vue';
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 