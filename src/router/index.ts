import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/',
      name: 'recent',
      component: () => import('../views/recent.vue')
    },
    {
      path: '/shared',
      name: 'shared',
      component: () => import('../views/shared.vue')
    }
  ]
})

export default router