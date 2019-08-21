import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);


import roger from './components/roger.vue'
import talin from './components/talin.vue'

const routes = [
  { path: '/roger', component: roger },
  { path: '/talin', component: talin }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
