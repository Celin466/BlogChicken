import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import About from '../views/AboutView.vue';
import Home from '../views/HomeView.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
