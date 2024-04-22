import { createRouter, createWebHistory } from 'vue-router'
import MyComponents from '../components/MyComponents.vue'
import My404 from '../components/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyComponents
    },
    {
      path: '/:catchAll(.*)',
      component: My404
    }
  ]
})

export default router
