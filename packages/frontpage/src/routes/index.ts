import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('src/pages/Index.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('src/pages/About.vue')
    },
    {
      name: 'oauth',
      path: '/oauth/:href',
      component: () => import('src/pages/OAuth.vue')
    }
  ]
})
