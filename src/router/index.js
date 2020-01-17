import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import FavoriteHeroes from '@/views/FavoriteHeroes'

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'FavoriteHeroes',
      component: FavoriteHeroes
    },
];

const router = new VueRouter({
  routes
});

export default router
