import Vue from 'vue'
import Vuex from 'vuex'

import Home from "./modules/Home"
import FavoriteHeroes from './modules/FavoriteHeroes'
import Heroes from "./modules/Heroes"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Heroes,
    FavoriteHeroes,
    Home
  }
})
