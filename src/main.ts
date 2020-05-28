import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

// ui components
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
