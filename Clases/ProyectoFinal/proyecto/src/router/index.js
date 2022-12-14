import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/SignIn',
    name: 'signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignInView.vue')
  },
  {
    path: '/Carrito',
    name: 'carrito',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoView.vue')
  },
  {
    path: '/Peliculas',
    name: 'peliculas',
    component: () => import(/* webpackChunkName: "about" */ '../views/PeliculasView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
