import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import About from '../views/AboutView.vue';
import Home from '../views/HomeView.vue';
import Register from '../views/Register.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/register', component: Register},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
