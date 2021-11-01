import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () =>
          import('../views/dashboard-sub-routes/DashboardHome.vue')
      },
      {
        path: 'classes',
        component: () => import('../views/dashboard-sub-routes/Classes.vue')
      },
      {
        path: 'exercises',
        component: () => import('../views/dashboard-sub-routes/Exercises.vue')
      },
      {
        path: 'school-subjects',
        component: () =>
          import('../views/dashboard-sub-routes/ShoolSubjects.vue')
      },
      {
        path: 'performance-charts',
        component: () =>
          import('../views/dashboard-sub-routes/PerformanceCharts.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
