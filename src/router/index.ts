import { createRouter, createWebHistory } from 'vue-router'
import View from '../views/LoginView.vue'
console.log(`import.meta.env.BASE_URL`, import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: View
    }
  ]
})

export default router
