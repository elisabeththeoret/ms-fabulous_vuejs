import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import PastryView from '@/views/PastryView.vue'
import ShowPastryView from '@/views/ShowPastryView.vue'
import NewPastryView from '@/views/NewPastryView.vue'
import EditPastryView from '@/views/EditPastryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/pastry',
    name: 'pastry',
    component: PastryView
  },
  {
    path: '/pastry/:id',
    name: 'show-pastry',
    component: ShowPastryView
  },
  {
    path: '/new-pastry',
    name: 'new-pastry',
    component: NewPastryView
  },
  {
    path: '/edit-pastry/:id',
    name: 'edit-pastry',
    component: EditPastryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
