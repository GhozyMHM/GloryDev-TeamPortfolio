import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ghozy',
    name: 'ghozy',
    component: () => import( /* webpackChunkName: "about" */ '../views/Ghozy.vue')
  },
  {
    path: '/rafi',
    name: 'rafi',
    component: () => import( /* webpackChunkName: "about" */ '../views/Ghozy.vue')
  },
  {
    path: '/shiddiq',
    name: 'shiddiq',
    component: () => import( /* webpackChunkName: "about" */ '../views/Ghozy.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router