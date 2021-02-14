import Vue from 'vue'

import "@/assets/app.scss";

import vuetify from './plugins/vuetify'
import router from './plugins/router'
import App from './App.vue'

import "./filters";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
