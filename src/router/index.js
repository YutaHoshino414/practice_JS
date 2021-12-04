import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'
import Page4 from '../views/Page4.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {  //追加
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {  //追加
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {  //追加
    path: '/page3',
    name: 'Page3',
    component: Page3
  },
  {  //追加
    path: '/page4',
    name: 'Page4',
    component: Page4
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
