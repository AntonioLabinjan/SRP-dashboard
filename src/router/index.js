// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import PortugalMap from '@/components/PortugalMap.vue'
import PartyOverview from '@/components/PartyOverview.vue'
import HistoryOverview from '@/components/HistoryOverview.vue'
import PivotViews from '@/components/PivotViews.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/map',
    name: 'Map',
    component: PortugalMap
  },
  {
    path: '/parties',
    name: 'Parties',
    component: PartyOverview
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryOverview
  },
  {
    path: '/pivots',
    name: 'Pivots',
    component: PivotViews
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
