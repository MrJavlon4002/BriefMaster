import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../components/ResearchPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/LogingPage.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../components/UserPage.vue'),
    },
    {
      path: '/research/pages/:id',
      name: 'paper',
      component: () => import('../components/PaperPage.vue'),
      props: true,
    },
    {
      path: '/summerease/',
      name: 'summery',
      component: () => import('../components/SummeryPage.vue'),
    }
  ]
})

export default router
