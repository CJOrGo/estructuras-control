import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/v-if', name: 'if', component: () => import('../views/IfView.vue') },
  { path: '/v-for', name: 'for', component: () => import('../views/ForView.vue') },
  { path: '/v-show', name: 'show', component: () => import('../views/ShowView.vue') },
  { path: '/v-key', name: 'key', component: () => import('../views/KeyView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router