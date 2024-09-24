import { createRouter, createWebHistory } from 'vue-router'
import View from '../views/AuthView.vue'
console.log(`import.meta.env.BASE_URL`, import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/*/:devName?',
      name: 'Auth',
      component: import('../views/AuthView.vue')
    },
    {
      path: '/login/:devName',
      name: 'login',
      component: import('../views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: View,
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach((to, from) => {
  console.log(`to.meta.requiresAuth: ${to.meta.requiresAuth}`)
})
export default router
