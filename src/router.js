import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import FavouritesView from '@/pages/FavouritesView.vue'
import OrdersView from './pages/OrdersView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/favs', component: FavouritesView },
  { path: '/orders', component: OrdersView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
