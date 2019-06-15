import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Cookies from 'js-cookie'
import createPersistedState from 'vuex-persistedstate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
}).$mount('#app')
