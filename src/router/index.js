import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/lista.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
