import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import MockData from '../public/mock/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  MockData,
  render: h => h(App)
}).$mount('#app')
