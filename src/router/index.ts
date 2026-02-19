import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Shared from '@/views/Shared.vue'
import Recent from '@/views/Recent.vue'
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
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'recent',
      component: Recent
    },
    {
      path: '/shared',
      name: 'shared',
      component: Shared
    }
  ]
})

export default router
