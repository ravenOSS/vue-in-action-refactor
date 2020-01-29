import Vue from 'vue'
import VueRouter from 'vue-router'
import storeview from '@/views/StorefrontView'
import Form from '@/views/Form'
import Product from '@/components/Product'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StorefrontView',
    component: storeview,
    props: true
  },
  {
    path: '/form',
    name: 'Formview',
    component: Form,
    props: true
  },
  {
    path: '/product/id',
    name: 'Id',
    component: Product,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
