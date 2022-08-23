import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
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

if (import.meta.env.DEV) {
  routes.push({
    name: 'playground',
    path: '/playground',
    component: () => import('src/pages/Playground.vue')
  })
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
