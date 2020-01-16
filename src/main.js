import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-lite/material.min.js'

Vue.config.productionTip = false;

Vue.directive('mdl', {
  bind(el) {
    window.componentHandler.upgradeElement(el);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
