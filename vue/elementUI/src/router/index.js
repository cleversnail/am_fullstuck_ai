import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/layout',
        redirect: '/aima'
      },
      {
        path: '/aima',
        name: 'aima',
        component: () => import('../views/Aima.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router