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
    component: () => import( /* webpackChunkName: "about" */ '../views/Rafi.vue')
  },
  {
    path: '/shiddiq',
    name: 'shiddiq',
    component: () => import( /* webpackChunkName: "about" */ '../views/Shiddiq.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes
})

export default router