import { createRouter, createWebHistory } from 'vue-router'
import PrescriptionCreater from '@/components/PrescriptionCreater.vue'
import MyPatients from '@/components/MyPatients.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import home from '@/components/home.vue'
import productlisting from '@/components/productlisting.vue'
import productdetails from '@/components/productdetails.vue'
import cartpage from '@/components/cartpage.vue'
import blogdetails from '@/components/blogdetails.vue'
import packagedetails from '@/components/packagedetails.vue'
import combopackdetails from '@/components/combopackdetails.vue'
import myadress from '@/components/myadress.vue'
import order from '@/components/order.vue'
import myaccount from '@/components/myaccount.vue'
import ordersummery from'@/components/ordersummery.vue' 
import addnewadress from '@/components/addnewadress.vue'
import editadress from '@/components/editadress.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  { 
    path:'/Login',
    name:'Login',
    component:Login

  },
  { 
    path:'/editadress',
    name:'editadress',
    component:editadress

  },
  {
    path:'/addnewadress',
    name:'addnewadress',
    component:addnewadress
  },
  { 
    path:'/ordersummery',
    name:'ordersummery',
    component:ordersummery

  },

  { 
    path:'/myaccount',
    name:'myaccount',
    component:myaccount

  },
  { 
    path:'/order',
    name:'order',
    component:order

  },

  { 
    path:'/myadress',
    name:'myadress',
    component:myadress

  },

  { 
    path:'/combopackdetails',
    name:'combopackdetails',
    component:combopackdetails

  },

  {
    path:'/packagedetails',
    name:'packagedetails',
    component:packagedetails
  },
  {
    path:'/blogdetails',
    name:'blogdetails',
    component:blogdetails
    
  },
  {
    path:'/cartpage',
    name:'cartpage',
    component:cartpage

  },
  {
    path: '/pc',
    name: 'PrescriptionCreater',
    component: PrescriptionCreater
  },
  {
    path: '/productdetails/:id',
    name:'productdetails',
    component:productdetails
  },
  {
    path:'/productlisting/',
    name:'productlisting',
    component:productlisting
  },
  {
    path: '/MyPatients',
    name: 'MyPatients',
    component: MyPatients
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
