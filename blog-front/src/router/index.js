import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'
  const routes = [
    {
      path: '/', name: 'home', component: HomeView,
    },
    {
      path: "/login", name:'login', component: login
    },
    {
      path: '/about', name: 'about', component: () => import('../views/AboutView.vue'),
    },
  ];

const router = creatRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
