import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/summary-cabinet',
      name: 'Cabinet',
      component: () => import('../views/CabinetView.vue')
    },
    {
      path: '/summary-article',
      name: 'Article',
      component: () => import('../views/ArticleView.vue')
    },
  ]
})

export default router
