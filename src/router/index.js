import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import(/* webpackChunkName: "about" */ '../views/messages.vue')
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import(/* webpackChunkName: "about" */ '../views/offers.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path:'/searchcontractor',
    name:'searchcontractor',
    component: SearchContractor
  },
  {
    path:'/profilecontractor',
    name:'profilecontractor',
    component:ProfileContractor
  },
  {
    path:'/projectprogress',
    name:'projectprogress',
    component: ProjectInProgress
  },
  {
    path:'/controlmenu',
    name:'controlmenu',
    component: ControlMenu
  },
  {
    path:'/finalproject',
    name:'finalproject',
    component: FinalProject
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
