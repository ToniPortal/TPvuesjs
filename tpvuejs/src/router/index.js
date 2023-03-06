import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExportView from '../views/ExportView.vue'
import ImportView from '../views/ImportView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/export',
    name: 'export',
    component: ExportView
  },
  {
    path: '/import',
    name: 'import',
    component: ImportView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
