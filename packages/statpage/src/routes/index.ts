import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('src/pages/Index.vue')
    },
    {
      name: 'board',
      path: '/board',
      component: () => import('src/pages/Board.vue')
    }
  ]
})
