import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Pet from './Pet.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pet/:id',
    name: 'Pet',
    component: Pet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
