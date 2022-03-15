import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('beforeEach', to, from)
})

export default router
