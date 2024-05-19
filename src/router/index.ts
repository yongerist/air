import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import IndexView from '@/views/indexView.vue'
import { useTokenStore } from '@/stores/myToken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'index',
          component: IndexView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/:xxx(.*)*',
      name: 'not-found',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta?.requiresAuth)) {
    const store = useTokenStore()
    if (!store.token) {
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }
  next()
})

export default router
