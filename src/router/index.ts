import { createRouter, createWebHistory } from 'vue-router'
import type { Component } from 'vue/dist/vue.js'

interface IComponents {
    [key: string]: Component
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'recent',
      component: () => import('../views/Recent.vue')
    },
    {
      path: '/shared',
      name: 'shared',
      component: () => import('../views/Shared.vue')
    }
  ]
})

export default router
