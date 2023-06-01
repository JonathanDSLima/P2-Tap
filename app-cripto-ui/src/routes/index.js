
import { createRouter, createWebHistory  } from 'vue-router'
import Home from './../views/Home.vue'
import FormTransaction from './../components/FormTransaction.vue'
import ListTransaction from './../components/ListTransaction.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-transaction',
    name: 'ListTransaction',
    component: ListTransaction
  },
  {
    path: '/form-transaction',
    name: 'FormTransaction',
    component: FormTransaction
  },
  {
    path: '/form-transaction/:id',
    name: 'EditTransaction',
    component: FormTransaction
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router