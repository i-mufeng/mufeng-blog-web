import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
    alias: '/hom',
    meta: {
      title: 'Home'
    }
  }
]
const router = createRouter({

  history: createWebHistory(),
  routes
})

export default router
