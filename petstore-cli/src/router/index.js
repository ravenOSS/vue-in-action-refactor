import Vue from 'vue'
import VueRouter from 'vue-router'
import Storefront from '@/components/Storefront'
import Checkout from '@/components/Checkout'
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'store-front',
    component: Storefront,
    props: true
  },
  {
    path: '/form',
    name: 'checkout',
    component: Checkout,
    props: true
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
